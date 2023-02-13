const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const User = require('./models/UserSchema')

app.use(cors())
app.use(express.json())



mongoose.connect('mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/hospitalsDB', () => console.log('MongoDB connected'))

app.get('/', async (req, res) => {
    const response = await User.find()
    res.send(response)
})

app.post('/api/createuser', async (req, res) => {
    await User.create({
        name: 'Jancsi',
        email: 'email@fsdsd.hu',
        password: 'jelszo'
    })
})

app.post('/api/create-hospital', async(req, res) =>{
    const createResp = await axios.post("https://api.billingo.hu/v3/partners",
        {
          name: "Honved korhaz",
          address: {
            country_code: "DE",
            post_code: "1135",
            city: "Budapest",
            address: "Robert Karoly krt",
          },
          emails: ["honved@mail.hu"],
          // "taxcode": "string",
          // "iban": "string",
          // "swift": "string",
          // "account_number": "string",
          // "phone": "string",
          // "general_ledger_number": "string",
          // "tax_type": "",
          // "custom_billing_settings": {
          //   "payment_method": "aruhitel",
          //   "document_form": "electronic",
          //   "due_days": 0,
          //   "document_currency": "AED",
          //   "template_language_code": "de",
          //   "discount": {
          //     "type": "percent",
          //     "value": 0
          //   }
          // },
          // "group_member_tax_number": "string"
        },
        {
          headers: {
            "X-API-KEY": "420ac726-abad-11ed-bd4b-06ac9760f844",
          }
        }
      )
      res.send(createResp.data)
})

app.listen(7777, () =>{
    console.log('Megy a szerver 7777-es porton')
})