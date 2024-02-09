const HomeRouter = require('express').Router();
const apiKeyMiddleware = require('../middleware/apiKey.middleware')



// HomeRouter.use(apiKeyMiddleware)
//home route
HomeRouter.get('/',(req,res)=>{
    res.render('index',{
        title: "my home page"
    })
});

//about route
HomeRouter.get('/about',(req,res)=>{
    res.render('about',{
        title: "my about page"
    });

})
HomeRouter.get('/error',(req,res)=>{
    Errorhandler.notFoundError()
//    throw new Error('All fields are required')
   

})


//download route
HomeRouter.get('/download',(req,res)=>{
   
    res.download(path.resolve(__dirname) + "/about.html");
})







module.exports = HomeRouter;