    //Constantes de la base de datos de ingreso
const URL_BD_Usuarios = "http://localhost:3000/users";  //Llamar a la API de Platzi
/*const URL_BD_Usuarios = "https://api.escuelajs.co/api/v1";*/  //Llamar a la API de Platzi
    //Métodos para verificar el ingreso
        //Obtener el formulario
const form = document.querySelector('form');
        //Obtener los campos de usuario y contraseña
const email = document.querySelector(".email");
// const username = document.querySelector(".text");
const password = document.querySelector(".password");

    //Escuchador de eventos
form.addEventListener('submit', async (event) => {
    event.target.reset();
    const user = await validateEmail(email);
    if(user === null){
        console.log(user);
        alert(`El usuario ${username} no se ha registrado a nuestra base de datos`);
    } else{
        if(user.password === password.value){
            localStorage.setItem("userOnline", JSON.stringify(user));
            alert(`Bienvenido ${user.username}`);
            /*window.location.href= "../pages/transporte.html";*/
        }
    }
    event.target.focus();
});


    //Comparar los registros con la base de datos
async function validateEmail(email){
    /*const responseU = await fetch(`URL_BD_Usuarios?email=${username.value}`);
        const dataU = await responseU.json();*/
    const responseE = await fetch(`http://localhost:3000/users?email=${email.value}`);
        const dataE = await responseE.json();

        //Validar que no se repitan el correo o el nombre de usuario
    const emailLog = checkData(dataE);
    /*const userLog = checkData(username);*/
    
    /*return [emailLog, userLog];*/
    return emailLog;
}

async function checkData(json){
    if(json.length === 1){
        return json[0];
    } else{
        return null;
    }
}
