const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    ph_no:Nunber

})

mongoose.model('user',userSchema)
module.exports = mongoose.model('user')