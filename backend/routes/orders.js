const express = require('express')
const axios = require('axios')
const router = express.Router()
const mongoose = require('mongoose')
const Invoice = require('../models/InvoiceSchema')
const Product = require('../models/ProductSchema')


router.post('/create_order', async (req, res) => {
     let product = await Product.find()
     let availableQuantity = product[0].quantity;
     console.log(availableQuantity)
     if (availableQuantity < req.body.quantity) {
      return res.send(`Elérhető mennyiség: ${availableQuantity} db`).status(400);
  } else {
        const today = new Date();
        const dueDate =  new Date(today);
        dueDate.setDate(today.getDate() + 15);
        
            
    const invoice = await axios.post(
      "https://api.billingo.hu/v3/documents",
      {
        partner_id: req.body.hospitalID,
        block_id: 0,
        type: "invoice",
        fulfillment_date: today.toISOString().split("T")[0],
        due_date: dueDate.toISOString().split("T")[0],
        payment_method: "wire_transfer",
        language: "hu",
        currency: "HUF",
        conversion_rate: 1,
        electronic: false,
        paid: false,
        items: [
          // {
          //   product_id: 12855670,
          //   quantity: req.body.quantity,
          //   comment: "",
          // },
          {
            name: "FFP3 Mask",
            unit_price: 100,
            unit_price_type: "gross",
            quantity: req.body.quantity,
            unit: "db",
            vat: "0%",
            comment: "",
            entitlement: "",
          },
        ],
        comment: "",
        settings: {
          mediated_service: false,
          without_financial_fulfillment: false,
          online_payment: "",
          round: "one",
          no_send_onlineszamla_by_user: true,
          order_number: "",
          instant_payment: true,
          selected_type: "advance",
        },
        instant_payment: true,
      },
      {
        headers: {
          "X-API-KEY": "a6ea6778-aba3-11ed-9767-0254eb6072a0",
        },
      }
    );
      const newQuantity = availableQuantity - req.body.quantity;
      await Product.updateOne({}, { quantity: newQuantity });
      // console.log(res.json(invoice.data))
      await Invoice.create(invoice.data)
      return res.status(200).json(invoice.data);
    }
})

module.exports = router

