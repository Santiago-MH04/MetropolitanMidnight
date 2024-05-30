// Exportar la función utilizando export default

//esta es la coneccion de sockets de el servidor 
// Esta es la conexión de sockets del servidor 
export default async function (io) {

    // Este es el array que está recorriendo indexOf de los usuarios que están conectados
    const dataconected = await fetch(`http://localhost:3000/connected`);
    const connected = await dataconected.json();
    const nickNames = connected.map(entry => entry.usernames);
    const sockets = {}; // Objeto para almacenar los sockets por nombre de usuario

    // Si todo sale bien se mostrará esto
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');

        socket.on("nuevo usuario", (data, cb) => {
            console.log(nickNames.indexOf(data) !== -1);

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