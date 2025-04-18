const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const userRouter = express.Router();

userRouter.get('/users:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

userRouter.get('/', (req, res) => {
    res.send('Hello, World1122221!');  
});

app.use('/', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
