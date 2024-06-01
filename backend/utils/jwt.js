const sendtoken = (res,statuscode,User)=>{
    const token = User.getjwttoken()
    res.status(statuscode).json({
        success : true,
        message : 'login successfully',
        token,
        User
    })
   
    
}

module.exports = sendtoken;