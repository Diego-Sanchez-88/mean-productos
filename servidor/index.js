// console.log("Desde index.js");

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conexión a la base de datos
conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

// Definir la ruta principal
// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

app.listen(4000, () => {
    console.log('El servidor corre correctamente');
});