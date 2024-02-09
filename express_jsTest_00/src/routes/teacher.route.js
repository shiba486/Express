const express = require('express');
const teacherRouter = express.Router();
const teacherController = require('../controllers/teacherController');
teacherRouter.get('/user/info',teacherController.teacherInfo)



module.exports = teacherRouter;
