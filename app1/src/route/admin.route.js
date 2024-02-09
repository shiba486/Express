const express = require('express');
const adminRouter = express.Router();
const adminController = require('../controller/adminController');


adminRouter.use('/info',adminController.adminInfo);
adminRouter.use('/',(req,res)=>{
    res.end('<h1>This is admin panel Route</h1>')
})



module.exports = adminRouter;