const express = require('express');

const userRouter = express.Router();

const users  = require('../models/user.js');

userRouter.get('/users/:id', async (req, res) => {
    
});

userRouter.post('/users', async (req, res) => {
    const { userName, password, email } = req.body;
    try {
        const newUser = await users.create({ userName, password, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});