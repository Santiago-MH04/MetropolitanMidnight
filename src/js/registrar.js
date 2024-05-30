    //Obtener el formulario
const formReg = document.querySelector("#registration-form");
    //Obtener los campos de usuario y contraseña
const username = document.querySelector("#nombre-usuario");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");


// Manejar el envío del formulario de registro
formReg.addEventListener("submit", async (event) => {
    event.preventDefault();
    const checkPassword = validatePasswords(password, confirmPassword);
        console.log(`checkPassword = ${checkPassword}`);
    const checkEmail = await validateEmail(email);
        console.log(`checkEmail = ${checkEmail}`);

        //Guardar usuario
    if (checkPassword === true && checkEmail === true) {
        await registerUser(username, email, password);
        window.location.href = "/";
    } else {
        alert("Lo sentimos, pero alguno de los campos es incorrecto");
    }
})

    //Confirmación de contraseñas
function validatePasswords(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        return true;
    } else {
        return false;
    }
}

    //Validar que el correo no esté almacenado en base de datos 
async function validateEmail(email) {
        //Llamar a todos los campos (con el "?" se llaman los parámetros, seguidamente se agrega el parámetro)
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`);
    const data = await response.json();

        //Validar que no se repita el correo
    if (data.length === 0) {
        return true;
    } else {
        return false;
    }
}

    //Guardar nuevo usuario
async function registerUser(username, email, password) {
    let role;
    const emailString = email.value;
    if(emailString.slice(-25) === "@metropolitanmidnight.com"){
        role = "admin";
    } else{
        role = "user";
    }

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            role: role
        })
    })
    const data = await response.json();
}

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("termsModal");
    var btn = document.getElementById("termsLink");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});