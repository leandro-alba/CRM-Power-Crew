const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");

//main routes 
router.get('/', homeController.getIndex)//reads index page 
//login
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
//logout
router.get('/logout', authController.getLogout)
//signup
router.get('/signup', authController.getSignup)
router.get('/signup', authController.postSignup) 