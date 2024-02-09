const express = require('express');
const studentRouter = require("./src/routes/student.route")
const teacherRouter = require("./src/routes/teacher.route")
const app = express();


app.use("/student",studentRouter);
app.use('/teacher',teacherRouter);

module.exports = app;