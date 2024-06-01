const Usermodel = require('../Models/Usermodel')
const bcrypt = require('bcrypt');
const sendToken= require('../utils/jwt')

exports.registerUser =async (req,res,next)=>{
    const{name,email,password} = req.body
   const User =await Usermodel.create({
        name,
        email,
        password
    })
    const token = User.getjwttoken();
    res.status(201).json({
        success : true,
        token,
        User
        
    })
}

exports.loginUser =async (req,res,next)=>{
     const{email , password}= req.body
     if(!email || !password){
        res.status(400).json({
            success : false,
            message :'please enter email or password'
        })
     }
    const User=await Usermodel.findOne({email})
    if(!User){
        res.status(400).json({
            success : false ,
            message : 'email or user id does not match'
        })
    }
     const verified = await bcrypt.compare(password,User.password)
     if(!verified){
        res.status(400).json({
            success: false,
            message : 'password does not match'
        })
     }
      sendToken( res,201, User)
}