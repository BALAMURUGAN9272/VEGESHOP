const connnectdatabase = require('../config/database')
const product = require('../data/product.json')
const productmodel = require('../Models/productmodel')
const dotenv = require('dotenv')


dotenv.config({path:'backend/config/config.env'})
connnectdatabase();



const seedproduct = async()=>{
try {

   await productmodel.deleteMany()
    console.log('products deleted')
   await  productmodel.insertMany(product)
   console.log('products added')
    
} catch (error) {
    error.message
}
process.exit
   
}

seedproduct()
