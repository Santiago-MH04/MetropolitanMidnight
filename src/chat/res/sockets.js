// Exportar la función utilizando export default

//esta es la coneccion de sockets de el servidor 
export default function (io) {

    let nickNames=[]
    // Si todo sale bien se mostrará esto 
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');

        socket.on("nuevo usuario",(data,cb)=>{
            //investige como hace para que con esta linea se mande a la consola todo 
            console.log(data)
            if(nickNames.indexOf(data)!= -1){
                cb(false)
            }else{
                cb(true)
                socket.nickName=data
                nickNames.push(socket.nickName)
                updateNicknames()
            }



        })

        //me envia los datos a traves de send messages
        socket.on(`send message`, function(data){
            //el recive los mensajes y los reenvia
            io.emit(`new message`,{
                msg:data,
                nick:socket.nickName
            })
        })

        socket.on("disconnect", data=>{
            if(!socket.nickName) return;
            nickNames.splice(nickNames.indexOf(socket.nickName),1)
            updateNicknames()
    
            
    
        })

        function updateNicknames(){
            io.sockets.emit("usernames",nickNames)
        }

    });

    // Si hay algún error se mostrará esto 
    io.on('error', error => {
        console.error('Error en la conexión:', error);
    });

    
}