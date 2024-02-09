const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('<h1> this is home route</h1>')
})
//response statuscode
app.get('/contact',(req,res)=>{
    res.status(200);
    res.end('successful')
})
//response download
app.get('/download',(req,res)=>{
    res.download("./upload/flower.jfif")
})
app.get('/bangladesh',(req,res)=>{
    res.redirect("http://localhost:3004/india")
})
app.get('/india',(req,res)=>{
    res.send("this is India")
})



module.exports = app;