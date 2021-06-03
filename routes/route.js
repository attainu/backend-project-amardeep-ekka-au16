const express=require('express')
const bodyparser=require('body-parser')
const router=express.Router()
const path=require('path')
const getHome=require('../controller/home')
const getLogin=require('../controller/login')
const postLogin=require('../controller/login')
const getSignup=require('../controller/signup')
const postSignup=require('../controller/signup')

router.use(express.static(path.join(__dirname,'../public')))

router.use(bodyparser.json())

router.get('/',getHome)

router.get('/login',getLogin)

router.post('/login',postLogin)

router.get('/signup',getSignup)

router.post('/signup',postSignup)

module.exports=router
