const express = require('express');
const studentRouter = express.Router();
const studentController = require('../controllers/studentController');

studentRouter.use('/user/info',studentController.studentInfo)



module.exports = studentRouter;
