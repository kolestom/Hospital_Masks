const mongoose = require('mongoose');

const MaskSchema = new mongoose.Schema({
    productID: {type: Number, required: true},
    name: {type: String, required: true},
    quantity: { type: Number, required: true },
    pricePerPiece: { type: Number, required: true },
    currency: {type: String, required: true}
});

module.exports = mongoose.model('Mask', MaskSchema);
