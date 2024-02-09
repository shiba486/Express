const express = require('express');
const userRouter = express.Router();

userRouter.get('/login',(req,res)=>{
    res.send('hello everyone i am login page')
})

userRouter.get('/register',(req,res)=>{
    res.send('<h1>This get request from register route</h1>')
})
userRouter.get('/contact',(req,res)=>{
    res.send('<h1>This get request from contact route</h1>')
})
userRouter.get('/about',(req,res)=>{
    res.send('<h1>This get request from about route</h1>')
})

module.exports = userRouter;