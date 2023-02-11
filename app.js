// Módulos requeridos
const express = require('express');
const http = require('http');
const helmet = require('helmet');
let compression = require('compression');
require('dotenv').config();
const {v4: uuidv4} = require('uuid');
let cors = require("cors");


const app = express();
app.use(helmet({contentSecurityPolicy: false}));  // Ayuda a proteger aplicaciones Express
app.use(compression()); // Comprime las respuestas para más rapidez
app.use(cors());

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);

// Contenido estático
app.use(express.static('./public'));


// API
app.get('/api/get-uuid', function(req, res) {
    res.send(uuidv4());
});

// 404
app.get('*', function(req, res) {
    res.status(404).send('Error 404 - Recurso no encontrado')
});



