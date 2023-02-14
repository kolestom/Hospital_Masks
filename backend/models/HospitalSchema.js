const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    country_code: String,
    post_code: String,
    city: String,
    address: String
});

const CustomBillingSettingsSchema = new mongoose.Schema({
    payment_method: String,
    document_form: String,
    due_days: Number,
    document_currency: String,
    template_language_code: String,
    discount: Number
});

const GiroSettingsSchema = new mongoose.Schema({
    giro_default_settings: Boolean,
    giro_payment_request_enabled: Boolean,
    giro_different_amount_allowed: Boolean
});

const PartnerShippingSchema = new mongoose.Schema({
    match: Boolean,
    name: String,
    mode: String,
    address: AddressSchema
});


const HospitalSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: AddressSchema,
    emails: [String],
    taxcode: String,
    iban: String,
    swift: String,
    account_number: String,
    phone: String,
    General_ledger_number: String,
    tax_type: String,
    custom_billing_settings: CustomBillingSettingsSchema,
    group_member_tax_number: String,
    giro_settings: GiroSettingsSchema,
    partner_shipping: PartnerShippingSchema,
    internal_comment: String,
    partner_show_type: String
});

module.exports = mongoose.model('Hospital', HospitalSchema);

