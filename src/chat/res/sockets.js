// Exportar la función utilizando export default

//esta es la coneccion de sockets de el servidor 
// Esta es la conexión de sockets del servidor 
// Esta es una función asíncrona que exporta por defecto (export default). Toma un parámetro io, que representa el servidor de Socket.IO.
export default async function (io) {

    // Este es el array que está recorriendo indexOf de los usuarios que están conectados
    const dataconected = await fetch(`http://localhost:3000/connected`);
    const connected = await dataconected.json();
    const nickNames = connected.map(entry => entry.usernames);
    const sockets = {}; // Objeto para almacenar los sockets por nombre de usuario

    // Se realiza una solicitud a http://localhost:3000/connected para obtener una lista de usuarios conectados. Se espera a que la solicitud se complete y se convierte la respuesta en formato JSON. Luego se crea un array nickNames que contiene los nombres de usuario de los usuarios conectados. sockets es un objeto vacío que se utilizará para almacenar los sockets por nombre de usuario.

    // Si todo sale bien se mostrará esto
    // Cuando un cliente se conecta al servidor de Socket.IO, se ejecuta esta función. socket es el objeto que representa la conexión del cliente recién conectado.
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');
        //con socket on ponemos al servidor a escuchar un nuevo evento llamado on
        socket.on("nuevo usuario", (data, cb) => {
            console.log(nickNames.indexOf(data) !== -1);

            //Se comprueba si el nombre de usuario ya está en uso. Si lo está, se llama a la función de devolución de llamada cb con false. De lo contrario, se llama a cb con true, se asigna el nombre de usuario al objeto socket, se agrega a nickNames y se guarda el socket en el objeto sockets asociado con el nombre de usuario. Se imprime un mensaje para registrar la adición del usuario y se llama a updateNicknames().
            if (nickNames.indexOf(data) !== -1) {
                cb(false);
            } else {
                cb(true);
                socket.nickName = data;
                nickNames.push(socket.nickName);
                sockets[socket.nickName] = socket; // Guardar el socket con el nombre de usuario
                console.log(`Usuario añadido: ${socket.nickName}`);
                console.log(sockets); // Registro de depuración
                updateNicknames();
            }
        });

        // Me envía los datos a través de send message
        //El servidor escucha el evento 'send message', que es enviado por el cliente cuando quiere enviar un mensaje.
        socket.on('send message', (data, cb) => {
            // El .trim quita los espacios de los caracteres
            let msg = data.trim();
            // Si los tres primeros caracteres son `/p `
            if (msg.substr(0, 3) === `/p `) {
                msg = msg.substr(3);
                const indice = msg.indexOf(' ');
                if (indice !== -1) {
                    const name = msg.substring(0, indice);
                    const message = msg.substring(indice + 1);
                    if (name in sockets) {
                        // Emitir mensaje privado al usuario destinatario
                        sockets[name].emit('private', {
                            msg: message,
                            nick: socket.nickName
                        });
                        // Emitir mensaje privado al usuario remitente
                        socket.emit('private', {
                            msg: message,
                            nick: socket.nickName
                        });
                    } else {
                        console.log(`Usuario ${name} no encontrado en sockets`);
                        cb('Error! entra un usuario válido');
                    }
                } else {
                    cb('Error! por favor ingrese su mensaje');
                }
            } else {
                // Recibe los mensajes y los reenvía
                io.emit('new message', {
                    msg: data,
                    nick: socket.nickName
                });
            }
        });

        // Se extrae el nombre de usuario y el mensaje del mensaje enviado. Si el nombre de usuario existe en sockets, se envía el mensaje privado al usuario correspondiente y al remitente. De lo contrario, se llama a cb con un mensaje de error.
        // Si no es un mensaje privado, se emite el mensaje a todos los clientes conectados.

        socket.on('disconnect', () => {
            if (!socket.nickName) return;
            const index = nickNames.indexOf(socket.nickName);
            if (index !== -1) {
                nickNames.splice(index, 1);
                delete sockets[socket.nickName]; // Eliminar el socket del objeto
                console.log(`Usuario eliminado: ${socket.nickName}`);
                console.log(sockets); // Registro de depuración
            }
            updateNicknames();
        });

        // Esto lo que hace es escuchar cuando un usuario se desconecta y lo borra de usuarios 
        function updateNicknames() {
            io.sockets.emit('usernames', nickNames);
        }
    });

    // Si hay algún error se mostrará esto 
    io.on('error', error => {
        console.error('Error en la conexión:', error);
    });
}