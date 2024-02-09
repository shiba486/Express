const express = require('express');
const ejs = require('ejs')
const path = require('path');
const homeRouter = require('./src/routes/home.route')
const productRouter = require('./src/routes/product.route')
const apiRouter = require('./src/routes/api.route')
const app = express();
const PORT = process.env.PORT || 5500;

//middleware
app.set("view engine", "ejs");
// app.set("views",path.resolve (__dirname) + "/templates")
app.use(express.static('public'));

app.use(homeRouter);
app.use(apiRouter);
app.use(productRouter);

app.use((req,res,next)=>{
    return res.json({message : "page not found"})
})

//express error handling middleware
app.use((err,req,res,next)=>{
    console.log("error", err.message);
    res.json({message : err.message})
    next()
})

app.listen(PORT,()=> console.log(`server is running successfully`));