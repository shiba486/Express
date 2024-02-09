const express = require('express');
const userRouter = require('./routes/user.route')
const adminRouter = require('./routes/admin.route')
const app = express();


app.use("/api/user",userRouter);
app.use('/api/admin',adminRouter);


//default route
app.get('/',(req,res)=>{
     const id = req.header('id');
     const name = req.header('name')
    // const id = req.params.id;  //userID/:id/userAge/:age
    // const name = req.params.name;   //http req with route parameter
    // const {id,name} = req.query;    //destructuring http req with query parameter
    res.send(`<h2>student id is : ${id} and student name is ${name}</h2>`);
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/view/contact.html');
})
app.use((req,res)=>{
    res.send('404 url is not valid')
})
module.exports = app;