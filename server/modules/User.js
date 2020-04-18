const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    profileImg:{
        type:String, //url,
        required:true,
        trim:true,
        default:'https://res.cloudinary.com/dppogsm2u/image/upload/v1586354844/default_gywvgr.jpg',
    },
    name:{
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    email:{
    type: String,
    required: true,
    trim:true,
    unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)