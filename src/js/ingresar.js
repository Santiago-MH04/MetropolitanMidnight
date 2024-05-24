    //Constantes de la base de datos de ingreso
const URL_BD_Usuarios = "http://localhost:3000/database";
    //Métodos para verificar el ingreso
        //Obtener los campos de usuario y contraseña
const username = document.getElementByType("email").value();
const password = document.getElementByType("password").value();

    //Comparar los registros con la base de datos
async function check(username, password){
    const response = await fetch(URL_BD_Usuarios);
    const data = await response.json();
    let pass = false;

    /*data.array.forEach(user => {
        if(user.username == username && user.password == password){
            pass = true;
            break;  //Toca con un for clásico
        }
    });*/
}
