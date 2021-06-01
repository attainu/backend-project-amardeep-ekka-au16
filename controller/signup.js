const bodyParser = require('body-parser')
const express = require('express')
const users = require('../model/userSchema')
const bycrypt = require('bcryptjs')

const getSignup = (req,res)=>{
    res.render('signup')
}

const postSignup = (req, res) => {
    users.findOne({ email: req.body.email }, (err, data) => {
        if (data) {
            return res.send('email already exist')
        }
        else {
            hashpass = bycrypt.hashSync(req.body.password)
            users.create({
                name: req.body.name,
                email: req.body.email,
                password: hashpass,
                address: req.body.address,
                ph_no: req.body.ph_no

            }, (err, user) => {
                if (err) throw err
                res.send('registration succesful')
                console.log(user)
            })

        }
    })

}

module.exports = getSignup
module.exports = postSignup