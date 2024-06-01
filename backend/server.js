const app = require('./app');
const dotenv = require('dotenv')
const path = require('path');
const connectiondatabase = require('./config/database');


dotenv.config({path:path.join(__dirname,"config/config.env")})

connectiondatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port : ${process.env.PORT} in ${process.env.NODE_ENV}`)
})