const express=require('express')
const users = require('../model/userSchema')
const bodyParser = require('body-parser')
const bycrypt = require('bcryptjs')

const getLogin = (req,res)=>{
    res.render('login')
}

const postLogin = (req,res)=>{
    users.findOne({email:req.body.email},(error,data)=>{
        if(error){res.send("somethings worng")}
        if(!data){
            res.send("no email found, please register")
        }

        else{
            const hasspass=bycrypt.compareSync(req.body.password, data.password)
            if(hasspass){
                res.send("successful")
            }
            else{
                res.send("wrong password")
            }
        }
    })
}

module.exports=getLogin
module.exports=postLogin