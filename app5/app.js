const express = require('express');
const router = require("./src/routes/api");
const app = new express();

app.use('/',router);

module.exports = app;