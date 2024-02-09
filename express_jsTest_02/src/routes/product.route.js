const productRouter = require('express').Router(); 


productRouter.get('/products',(req,res)=>{
    res.render('product',{
        title: "my Product page"
    })
});














module.exports = productRouter