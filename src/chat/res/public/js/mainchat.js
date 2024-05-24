
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

    


///obteniendo elementos de el nick name form 
const nickform= document.querySelector("#nick-form")
console.log(nickform)
const nickError= document.querySelector("#nick-error")
console.log(nickError)
const nickName= document.querySelector("#nickname")
console.log(nickName)
const users=document.querySelector("#usernames")
console.log(users)



nickform.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("enviando")

    socket.on("nuevo usuario", )
    socket.emit("nuevo usuario", nickName.val(), function(data){
        

    })

})

$()

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



