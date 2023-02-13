import mongoose from 'mongoose';

const MaskSchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model('Mask', MaskSchema);
