const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post('/create_order', async (req, res) => {
    console.log(typeof req.body.hospitalID)
    const invoice = await axios.post('https://api.billingo.hu/v3/documents', {
        partner_id: req.body.hospitalID,
        block_id: 0,
        type: "invoice",
        fulfillment_date: "2023-02-13",
        due_date: "2023-02-13",
        payment_method: "wire_transfer",
        language: "hu",
        currency: "HUF",
        conversion_rate: 1,
        electronic: false,
        paid: true,
        items: [
          {
            product_id: 12855670,
            quantity: req.body.quantity,
            comment: "string",
          },
        ],
        comment: "string",
        settings: {
          mediated_service: false,
          without_financial_fulfillment: false,
          online_payment: "",
          round: "five",
          no_send_onlineszamla_by_user: true,
          order_number: "string",
          instant_payment: true,
          selected_type: "advance",
        },
        instant_payment: true,
    },
    {
        headers: {
          "X-API-KEY": "a6ea6778-aba3-11ed-9767-0254eb6072a0",
        }
      })
    return res.send('invoice').status(200)
})

module.exports = router

