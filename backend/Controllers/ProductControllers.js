const productmodel = require('../Models/productmodel')
const APIfeauters = require('../utils/apifeauters')


// get all products 
exports.getproducts= async (req,res,next)=>{
  const resperpage = 2;
   const apifeauters=  new APIfeauters(productmodel.find(),req.query).search().filter().pageinate();
     const products = await apifeauters.query
    res.status(200).json({
        success:true,
        count : products.length,
        products
    })
}

// create product
exports.createproduct = (req,res,next)=>{
        const products =   productmodel.create(req.body)
        res.status(200).json({
            succes:true,
            message:'product created',
            products
        })


}

// get singleproduct

exports.getsingleproduct= async (req,res,next)=>{
      const product =await productmodel.findById(req.params.id)
      if(!product){
      return  res.status(404).json({
            sucess:false,
            message : "product not found"
        })      }
      res.status(200).json({
        success:true,
        product
      })
}

// update product 

exports.updateproduct = async(req,res,next)=>{
       let product = await productmodel.findById(req.params.id)
       if(!product){
        return  res.status(404).json({
            sucess:false,
            message : "product not found"
       })
}
     product= await productmodel.findByIdAndUpdate(req.params.id,req.body,{
        new :true,
        runValidators : true
     })
     res.status(200).json({
        success:true,
        message : "product successfully updated",
        product
     })
}

//delete products 

exports.deleteproducts =async (req,res,next)=>{
  const products = await  productmodel.findById(req.params.id)
  if(!products){
    res.status(404).json({
        sucess:false,
        message : "product not found "
    })
  }
  await products.deleteOne()
  res.status(200).json({
    success:true,
    message : "product deleted"
  })
}