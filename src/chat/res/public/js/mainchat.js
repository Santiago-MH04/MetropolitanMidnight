const socket = io()


$(async function () {

    const dataUsers = await fetch(`http://localhost:3000/database`)
    //en allow se almacenan los usuarios que ya sale registrados en la base de datos 
    const allDataRegister = await dataUsers.json()
    const allow = allDataRegister.map(entry => entry.username)

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

        // socket.on("nuevo usuario", (data, cb) => {




        // })
        socket.emit("nuevo usuario", nickName.value, (data) => {
            console.log(nickName.value)
            let registrado = false
            for (let i = 0; i < allow.length; i++) {
                if (allow[i] === nickName.value) {
                    registrado = true
                    break
                }
            }
            if (registrado === true) {
                if (data) {
                    document.querySelector("#nick-wrap").style.display = "none";
                    document.querySelector("#content-wrap").style.display = "block"
                }else {
                    nickError.innerHTML = `<div class="alert alet-danger">
                <i class="bi bi-person">este usuario ya esta conectado</i>
                </div>`
                }
            } else {

                alert("usuario no registrado")
                window.location.href = `http://localhost:5173`
            }

            // nickName.value = ``

        })

    })

    $()

    //eventos
    $messageform.submit(e => {
        e.preventDefault();
        // console.log($messagebox.val())
        socket.emit(`send message`, $messagebox.val(), data=>{
            //este va a recibir posible errores
            $chat.append(`<p class="error">${data}</p>`)
        })
        $messagebox.val(``)


    })

    socket.on(`new message`, function (data) {
        $chat.append(`<b>${data.nick}</b> ${data.msg}<br/>`)

    })

    socket.on("usernames", data => {
        console.log(data)
        let html = ``
        for (let i = 0; i < data.length; i++) {
            html += `<p><i class="bi bi-person-circle"></i>:${data[i]}</p>`

        }
        users.innerHTML = html
    })
    socket.on(`private`, data=>{
        $chat.append(`<p class="private"><b>${data.nick}:</b>${data.msg}</p>`)
    })
})



