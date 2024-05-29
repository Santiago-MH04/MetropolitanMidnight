// Importar el módulo express utilizando import (ES6)
import express from 'express';
import { Server as SocketIO } from 'socket.io';
import http from 'http';
import path from 'path';
import sockets from './sockets.js';


// Obtener el directorio actual usando import.meta.url
let __dirname = decodeURIComponent(new URL(import.meta.url).pathname)

// Eliminar la barra invertida inicial
if (__dirname.startsWith("\\") || __dirname.startsWith("/")) {
    __dirname = __dirname.slice(1);
}

__dirname = path.dirname(__dirname);


// Crear una instancia de la aplicación express o un servidor usando express
const app = express();
const server=http.createServer(app)
//el modulo socket io funciona ensima de un servidor 
const io =new SocketIO(server);
//si el puerto es otro toma ese puerto si no toma el 3000
app.set(`port`,process.env.PORT  || 3001)

//importamos lo que esta en sockets
sockets(io);



console.log(path.join(__dirname, 'public'));

// `C:\\Users\\Pc Personal\\Desktop\\intento_x\\src\\public (esta direccion es la que entrega en windows verificar en otro pc)`


//archivos estaticos
app.use(express.static(path.join(__dirname,'public')))

//empezando el servidor 
server.listen(app.get(`port`), () => {
    console.log("Servidor en puerto 3001");
});

