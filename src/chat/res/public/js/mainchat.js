



const socket = io()
$(function () {

    //este es el encargado de enviar los datos
    //esta es la conexion de sockets de el cliente
    const socket = io()

    //obteniendo los elementos del doom desde la interface 
    const $messageform = $(`#message-form`);
    console.log($messageform)
    const $messagebox = $(`#message`)
    console.log($messagebox)
    const $chat = $(`#chat`)
    console.log($chat)






    ///obteniendo elementos de el nick name form 
    const nickform = document.querySelector("#nick-form")
    console.log(nickform)
    const nickError = document.querySelector("#nick-error")
    console.log(nickError)
    const nickName = document.querySelector("#nickname")
    console.log(nickName)
    const users = document.querySelector("#usernames")
    console.log(users)



    nickform.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("enviando")

        socket.on("nuevo usuario", (data, cb) => {




        })
        socket.emit("nuevo usuario", nickName.value, (data) => {
            if (data) {
                document.querySelector("#nick-wrap").style.display = "none";
                document.querySelector("#content-wrap").style.display = "block"
            } else {
                nickError.innerHTML = `<div class="alert alet-danger">
                <i class="bi bi-person">ese usuario ya existe</i>
                </div>`
            }
            nickName.value=``

        })

    })

    $()

    //eventos
    $messageform.submit(e => {
        e.preventDefault();
        // console.log($messagebox.val())
        socket.emit(`send message`, $messagebox.val())
        $messagebox.val(``)


    })

    socket.on(`new message`, function (data) {
        $chat.append(`<b>${data.nick}</b> ${data.msg}<br/>`)

    })

    socket.on("usernames",data =>{
        let html=``
        for(let i=0; i<data.length; i++){
            html += `<p><i class="bi bi-person-circle"></i>${data[i].username}</p>`
            
        }
        users.innerHTML=html
    })

})



