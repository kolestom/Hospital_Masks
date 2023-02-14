const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const User = require('./models/UserSchema')
const userRoutes = require('./routes/users')
const orderRoutes = require('./routes/orders')

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)



mongoose.connect('mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/hospitalsDB', () => console.log('MongoDB connected'))



app.listen(7777, () =>{
    console.log('Megy a szerver 7777-es porton')
})