const mongoose = require('mongoose')


const  connectiondatabase =()=>{
    try {
        
   
    mongoose.connect("mongodb+srv://balaemma17:9842783627@cluster0.foxel2q.mongodb.net/furnicart",{

        useNewUrlParser :true,
        useUnifiedTopology : true
    }).then(con=>{
        console.log(` my Mongodb is connected to the host : ${con.connection.host}`);
    })
} catch (error) {
    error.message
        
}
}

module.exports = connectiondatabase