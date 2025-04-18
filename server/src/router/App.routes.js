const express = require('express')

const {userController} = require("../controllers/userController")
const userRouter = express.Router()

const AppRoutes = function (app) {
    userRouter.post('/create_user', userController.create_user)
    userRouter.get('/get/:id', userController.get_user_byID)
    userRouter.delete('/delete/:id', userController.delete_user_byID)
    userRouter.put('/update/:id', userController.update_user)

    app.use('/api', userRouter)
}



module.exports = AppRoutes;
