const express = require('express');
const app = express();

app.use(express.json())

const woods = require('./Routes/product')
const users = require('./Routes/Auth')
const banner = require('./Routes/Banner')

app.use('/api/v1',woods)
app.use('/api/v1',users)
app.use('/api/v1',banner)


module.exports = app;
