const express = require("express");
const studentController = require("../controllers/studentController")
const router = express.Router();

router.get('/read',studentController.ReadStudent)
router.post('/create',studentController.CreateStudent)
router.put('/update',studentController.UpdateStudent)
router.delete('/delete',studentController.DeleteStudent)

module.exports = router;