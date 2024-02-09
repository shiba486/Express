const express = require('express');
const adminRouter = express.Router();

adminRouter.get("/",(req,res)=>{
    res.send('this is admin home page')
})
adminRouter.get('/login',(req,res)=>{
    res.status(200).json({
        "name":"shivaay",
        "age":19,
        "contact":123454,
        "post":"admin",
        'statusCode':200
    })
})

adminRouter.get("/contact",(req,res)=>{
    res.redirect('/login')
})
adminRouter.get((req,res)=>{
    res.send('403!! admin home page is error')
})
module.exports = adminRouter;