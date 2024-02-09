const express = require('express');
const router = express.Router();


//http methods

router.get('/login',(req,res)=>{
    res.send('<h1>This get request from login route</h1>')
})
router.get('/register',(req,res)=>{
    res.send('<h1>This get request from register route</h1>')
})
router.get('/admin',(req,res)=>{
    res.send('<h1>This get request from admin route</h1>')
})


module.exports = router;