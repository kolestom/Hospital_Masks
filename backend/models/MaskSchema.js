const mongoose = require('mongoose');

const MaskSchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Mask', MaskSchema);
