const express = require('express');

const route = express.Router();

const userController = require('../controller/user.controller');
route.get('/post',userController.getuser);


module.exports = route; 