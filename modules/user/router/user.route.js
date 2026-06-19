const express = require('express');
const rouuter = express.Router();
const userController = require('../controller/user.controller');

rouuter.route('/').post(userController.createUser).get(userController.getAllUsers);












module.exports = rouuter;