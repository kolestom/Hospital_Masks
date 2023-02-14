const mongoose = require('mongoose')
const Hospital = require("./models/HospitalSchema");

mongoose.connect(
  "mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/hospitalsDB",
  () => console.log("MongoDB connected")
);

const getAllHospitals = async () => {
  try {
    const hospitals = await Hospital.find();
    console.log(hospitals);
  } catch (error) {
    console.error(error);
  }
}

getAllHospitals();

