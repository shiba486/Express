const express = require('express');
const userRouter = require('./src/route/user.route');
const adminRouter = require('./src/route/admin.route');
const app = express();

app.use('/api/admin',adminRouter);
app.use('/api/user',userRouter);
app.use('/',(req,res)=>{
    res.end('<h1>This is Home Route</h1>')
});

// app.post('/create',(req,res)=>{
//     res.end('hello everyone i am create req from create route')
// })
// app.put('/update',(req,res)=>{
//     res.end('hello everyone i am put req from update route')
// })
// app.delete('/delete',(req,res)=>{
//     res.end('hello everyone i am delete req from delete route')
// })


module.exports = app;