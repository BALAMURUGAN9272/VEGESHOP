const connectiondatabase = require('../config/database');
const bannerdata = require('../data/banner.json')
const bannermodel = require('../Models/banner')
const dotenv = require('dotenv');

dotenv.config({path :"backend/config/config.env"})
connectiondatabase();


const Seedbanner = async ()=>{

    try {

        await bannermodel.deleteMany()
        console.log('image deleted')
    
       await  bannermodel.insertMany(bannerdata)
    
        console.log('image added')
        
    } catch (error) {
        console.log(error.message)
        
    }

   
}

Seedbanner();