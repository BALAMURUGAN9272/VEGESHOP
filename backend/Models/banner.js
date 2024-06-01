const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema ({
    image : {
        type : String,
        required : true
    }
})

const Schema = mongoose.model('banner',BannerSchema)

module.exports = Schema