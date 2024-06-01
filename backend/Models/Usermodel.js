const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');
const jwttoken = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({

    name:{
        type : String,
        required : [true , 'please enter username']
    },
    email:{
        type : String,
        required : [true , 'please enter email address'],
        unique : true,
        validate : [validator.isEmail,'please enter valid email address']
    },
    password : {
        type : String,
        required : [true , 'please enter password'],
        maxlength : [6, 'password cannot exceed six characters']
    },
    role:{
        type : String,
        default : 'user'
    },
    resetpasswordtoken : String,
    resetpasswordtokenExpire : String,
    createdat : {
        type : Date,
        default : Date.now
    }
})

UserSchema.pre('save', async function(next){
      this.password = await bcrypt.hash(this.password , 10)
})

UserSchema.methods.getjwttoken = function(){
     return  jwttoken.sign({id:this.id},process.env.JWT_SECRET,
        {expiresIn : process.env.JWT_EXPIRES_TIME})
}

let Usermodel = mongoose.model('User',UserSchema)

module.exports = Usermodel