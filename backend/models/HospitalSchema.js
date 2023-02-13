const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HospitalSchema = new Schema ({
    name: String,
    address: {
        country_code: {
            type: String,
            length: 2
        },
        post_code: String,
        city: String,
        address: String
      },
      emails: [String]
})

module.exports = mongoose.model('Hospital', HospitalSchema)