const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { text } = require('body-parser');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
});

module.exports = User;
