const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            username: req.body.username,
            password: hashedPassword,
           
        });
        res.json({ message: 'Usuario registrado con éxito', user });
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar usuario' });
    }
});

module.exports = router;
