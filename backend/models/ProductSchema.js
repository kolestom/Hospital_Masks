import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    comment: { type: String, default: "" },
    currency: { type: String, required: true },
    vat: { type: String, required: true },
    net_unit_price: { type: Number, required: true },
    gross_unit_price: { type: Number, required: true },
    unit: { type: String, required: true },
    General_ledger_number: { type: String, default: "" },
    General_ledger_taxcode: { type: String, default: "" },
    entitlement: { type: mongoose.Schema.Types.Mixed, default: null },
    ean: { type: String, default: "" },
    sku: { type: String, default: "" },
    is_manage: { type: Boolean, default: false },
    purchase_price: { type: Number, default: 0 }
});

export default mongoose.model('Product', ProductSchema);
