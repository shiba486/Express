const express = require("express");
const userRouter = require('./routes/users.route');
const { dirname } = require("path");
const app = express();

app.use("/api/user",userRouter);
//home route

app.use('/register',(req,res)=>{
    //send json file as response
    // res.status(200).json({
    //     "name":"shibanond",
    //     "message": "i am register page",
    //     "statusCode" : 200
    // })
    
    // res.redirect('/login') //redirect to another file

     
    res.sendFile(__dirname + "/view/register.html")
   
})
// default route
app.use('/login',(req,res)=>{
    // res.send('<h1>This is login page</h1>')
    // res.cookie ('name',"shibanondo");
    // res.cookie ('age',"19");
    res.clearCookie('name')
    res.append('id','13999')
    res.end();

})
app.use('/',(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + '/view/index.html')
})
app.use((req,res)=>{
    res.send('<h1>404:not a valid url</h1>')
})


// module export
module.exports = app;
