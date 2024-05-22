const socket=io()

$(function(){
    //este es el encargado de enviar los datos
    //esta es la conexion de sockets de el cliente
    const socket=io()


    //obteniendo los elementos del doom desde la interface 
    const $messageform =$(`#message-form`);
    console.log($messageform)
    const $messagebox=$(`#message`)
    console.log($messagebox)
    const $chat=$(`#chat`)
    console.log($chat)

    //eventos
    $messageform.submit(e=>{
        e.preventDefault();
        // console.log($messagebox.val())
        socket.emit(`send message`,$messagebox.val())
        $messagebox.val(``)


    })

    socket.on(`new message`,function (data){
        $chat.append(data+`<br>`)

    })





})