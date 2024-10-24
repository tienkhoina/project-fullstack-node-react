const express = require('express')
const router=express.Router()
const path = require('path');
const {getHomepage, getSignin,getSignup,Login}= require("../controller/homeController")

router.post('/login',Login);

module.exports = router