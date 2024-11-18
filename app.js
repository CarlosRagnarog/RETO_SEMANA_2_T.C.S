const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const usersRouter = require('./routes/users');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', usersRouter);

// Sincronizar la base de datos y arrancar el servidor
const PORT = 5000;
sequelize.sync({ force: true }) // Elimina las tablas existentes y las recrea (solo en desarrollo).
    .then(() => {
        console.log('Base de datos sincronizada correctamente');
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch((error) => console.error('Error al conectar a la base de datos:', error));
