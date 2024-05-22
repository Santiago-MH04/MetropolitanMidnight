// Importar el módulo express utilizando import (ES6)
import express from 'express'
// importamos socket io con algunos protocolos de server
import { Server as SocketIO } from 'socket.io';
//importamos los protocolos http
import http from 'http';
//importamos path
import path, { dirname } from 'path';
//por ultimo importamos socket que el que nos ayuda a escuchar y trasmitir en el servidor 
import sockets from './sockets.js';

// Obtener el directorio actual usando import.meta.url con esto obtenemos la ruta donde estamos parados actualmente en windows
let __dirname = decodeURIComponent(new URL(import.meta.url).pathname)
// crea un objeto URL utilizando la URL proporcionada por import.meta.url y luego extrae el componente pathname, que es la parte de la URL que indica la ruta del archivo.

// Eliminar la barra invertida inicial
if (__dirname.startsWith("\\") || __dirname.startsWith("/")) {
    __dirname = __dirname.slice(1);
}

//path toma la ruta que extrajimos arriba como argumento y devuelve el directorio padre de esa ruta
__dirname = path.dirname(__dirname);
// console.log(dirname)


//Es similar a crear un objeto que representa tu aplicación web en Express.js. Posteriormente, configuras esta aplicación para manejar rutas, middleware y otras funciones relacionadas con el servidor web. en resumen es una forma de crear un servidor listo para configurarse 
const app = express();

const server=http.createServer(app)
//Al crear esta instancia de Socket.io y pasarle el servidor HTTP como argumento, estás configurando Socket.io para manejar conexiones de sockets web en tu aplicación. Esto permite la comunicación en tiempo real entre el cliente y el servidor a través de sockets WebSocket.
const io =new SocketIO(server);

//si el puerto es otro toma ese puerto si no toma el 4000
app.set(`port`,process.env.PORT  || 4000)

//importamos lo que esta en sockets
sockets(io);

console.log(path.join(__dirname, 'public'))

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//empezando el servidor 
server.listen(app.get(`port`), () => {
    console.log("Servidor en puerto 4000");
});

