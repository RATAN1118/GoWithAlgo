const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username : {
        type:String,
        required: true
    },
    Email : {
        type:String,
        required: true,
        unique:true
    },
    Mobile_No : {
        type:Number,
        required: true,
        unique:true
    },
    password : {
        type:Number,
        required: true
    }
})

const resister = new mongoose.model("resister",userschema);
module.exports = resister;