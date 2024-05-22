// Exportar la función utilizando export default

//esta es la coneccion de sockets de el servidor 
export default function (io) {
    // Si todo sale bien se mostrará esto 
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');

        //me envia los datos a traves de send messages
        socket.on(`send message`, function(data){
            //el recive los mensajes y los reenvia
            io.emit(`new message`,data)
        })
    });

    // Si hay algún error se mostrará esto 
    io.on('error', error => {
        console.error('Error en la conexión:', error);
    });

    
}