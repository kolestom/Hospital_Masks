const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const Hospital = require('../models/HospitalSchema')

router.post('/login', async (req, res) => {
    const user = await User.find({username: req.body.username})
    if (user.length > 0) {
        if (user[0].password !== req.body.password) {
            return res.send('Wrong password').status(400)
        } else {
            return res.send(await Hospital.find({id : { $in: user[0].hospitalIds}})).status(200)
        }
    } else return res.send('Username does not exist').status(401)
    
})

router.post('/register', async (req, res) => {
    const user = await User.find({username: req.body.username})
    if (user.length > 0) return res.send('Username already exists').status(400)
    else {
        await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        return res.send('User created').status(200)
    }

})

module.exports = router