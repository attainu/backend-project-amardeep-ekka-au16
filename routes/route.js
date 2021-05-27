const express=require('express')
const bodyparser=require('body-parser')
const router=express.Router()
const path=require('path')
const getHome=require('../controller/home')
const getLogin=require('../controller/login')
const getSignup=require('../controller/signup')

router.use(bodyparser.json())

router.get('/',getHome)

router.get('/login',getLogin)

router.get('/signup',getSignup)

module.exports=router