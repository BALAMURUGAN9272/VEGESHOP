const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: {
        type : String,
        required : [true  , " please enter product name"],
        trim : true,
        maxlength : [100 , "product name cannot exceed"]
    } , 
    price :{
        type : Number,
        default : 10
         
    },
    description :{ 
        type : String ,
        required : [ true , " please enter product description "]
    },
    ratings: {
        type : String,
        
    },
     
     image : {
                type : String,
                required : true
            },
      
     category : {
        type : String,
        required : [true , " please enter product category"],
        enum : {
            values : [
                'Electronics',
                'Mobile phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Cothes',
                'Beauty/Health',
                'Sports',
                'furniture',
                'Outdoor',
                'Home'

            ],
            message : "please select correct category"
        }
     },
     seller : { 
        type : String,
         required : [ true, " please enter product seller"]
     },
     stock : { 
        type : Number,
        required : [true ,'please enter prduct stock'],
        maxlength :  [20 ,'product stock cannot exceed 20']
     },
     numsOdReviews : {
        type : Number,
        
     },
     reviews : [
        {
            name : { 
                type : String,
                required : true 
            
            },
            ratings : { 
                type : Number,
                required : true 
            },
            Comment  :{
                type : String,
                required : true
            }


        }
     ],
     user:{
        type : mongoose.Schema.Types.ObjectId
     },
     createdAt:{
        type : Date,
        default : Date.now()
     }

})

const Schema = mongoose.model('goods',productSchema)

module.exports = Schema