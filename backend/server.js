const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const User = require('./models/UserSchema')

app.use(cors())
app.use(express.json())



mongoose.connect('mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/test', () => console.log('MongoDB connected'))

app.get('/', async (req, res) => {
    const response = await User.find()
    console.log(response)
    res.send(response)
})

app.post('/api/createuser', async (req, res) => {
    await User.create({
        name: 'Jancsi',
        email: 'email@fsdsd.hu',
        password: 'jelszo'
    })
})

app.listen(7777, () =>{
    console.log('Megy a szerver 7777-es porton')
})