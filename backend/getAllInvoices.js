const mongoose = require("mongoose");
const Invoice = require("./models/InvoiceSchema");


mongoose.connect(
  "mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/hospitalsDB",
  () => console.log("MongoDB connected")
);

const getAllInvoices = async () => {
  try {
    const invoices = await Invoice.find();
    console.log(invoices);
  } catch (error) {
    console.error(error);
  }
};

getAllInvoices();
