const express = require("express");
const axios = require("axios");
const router = express.Router();
const mongoose = require("mongoose");
const Invoice = require("../models/InvoiceSchema");
const Product = require("../models/ProductSchema");
const Hospital = require("../models/HospitalSchema");

router.get("/allhospitals", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    return res.send(hospitals).status(200);
  } catch (e) {
    console.error(e);
    return res.send(e.message).status(400);
  }
});

router.post("/order_history", async (req, res) => {
  console.log(req.body);
  let invoices = await Invoice.find({ "partner.id": req.body.hospitalID });
  res.send(invoices);
});

router.post("/order_history", async (req, res) => {
  let invoices = await Invoice.find({ "partner.id": req.body.hospitalID });
  res.send(invoices);
});

router.post("/create_order", async (req, res) => {
  let product = await Product.find();
  let availableQuantity = product[0].quantity;

  if (availableQuantity < req.body.quantity) {
    return res.sendStatus(400);
  } else {
    const fullfilmentDate = new Date(req.body.fulfillment_date);
    const dueDate = new Date(fullfilmentDate);
    dueDate.setDate(fullfilmentDate.getDate() + 15);

    const invoice = await axios.post(
      "https://api.billingo.hu/v3/documents",
      {
        partner_id: req.body.hospitalID,
        block_id: 0,
        type: "invoice",
        fulfillment_date: fullfilmentDate.toISOString().split("T")[0],
        due_date: dueDate.toISOString().split("T")[0],
        payment_method: "wire_transfer",
        language: "hu",
        currency: "HUF",
        conversion_rate: 1,
        electronic: false,
        paid: false,
        items: [
          {
            name: "FFP3 Mask",
            unit_price: req.body.unit_price,
            unit_price_type: "gross",
            quantity: req.body.quantity,
            unit: "db",
            vat: req.body.vat,
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
    await Invoice.create(invoice.data);
    return res.status(200).json(invoice.data);
  }
});

router.post("/invoice_url", async (req, res) => {
  try {
    const data = "";
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.billingo.hu/v3/documents/${req.body.invoiceId}/public-url`,
      headers: {
        "X-API-KEY": "a6ea6778-aba3-11ed-9767-0254eb6072a0",
      },
      data: data,
    };

    const response = await axios(config);

    console.log("response.data.public_url:", response.data.public_url);
    return res.send(response.data.public_url).status(200);
  } catch (error) {
    console.error(error);
  }
});

router.get("/available_quantity", async (req, res) => {
  try {
    let product = await Product.find();
    let availableQuantity = product[0].quantity.toString();
    console.log("availableQuantity",availableQuantity);
    return res.send(availableQuantity);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
