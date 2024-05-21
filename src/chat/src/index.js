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
console.log(dirname)
