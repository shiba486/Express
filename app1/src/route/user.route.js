const express = require('express');
const userController = require('../controller/userController')
const userRouter= express.Router();


userRouter.use("/info",userController.userInfo)
userRouter.use('/',(req,res)=>{
    res.end('<h1>This is user panel Home Route</h1>')
})

module.exports = userRouter;