const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cuaderno_usuarios', 'usuario_app', 'contraseña_segura', {
    host: 'localhost',
    dialect: 'mariadb',
});

module.exports = sequelize;
