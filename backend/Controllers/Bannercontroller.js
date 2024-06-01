const bannermodel = require('../Models/banner')

exports.getbanner = async (req,res,next)=>{
  const banner = await  bannermodel.find()

  res.status(200).json({
     banner 
  })
}