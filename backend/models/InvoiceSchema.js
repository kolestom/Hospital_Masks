const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  id: Number,
  invoice_number: String,
  type: String,
  cancelled: Boolean,
  block_id: Number,
  payment_status: String,
  payment_method: String,
  gross_total: Number,
  currency: String,
  conversion_rate: Number,
  invoice_date: String,
  fulfillment_date: String,
  due_date: String,
  paid_date: String,
  organization: {
    name: String,
    tax_number: String,
    bank_account: {
      id: Number,
      name: String,
      account_number: String,
      account_number_iban: String,
      swift: String,
    },
    address: {
      country_code: String,
      post_code: String,
      city: String,
      address: String,
    },
    small_taxpayer: Boolean,
    ev_number: String,
    eu_tax_number: String,
    cash_settled: Boolean,
  },
  partner: {
    id: Number,
    name: String,
    address: {
      country_code: String,
      post_code: String,
      city: String,
      address: String,
    },
    emails: [String],
    taxcode: String,
    iban: String,
    swift: String,
    account_number: String,
    phone: String,
    general_ledger_number: String,
    tax_type: String,
    custom_billing_settings: {
      payment_method: String,
      document_form: String,
      due_days: Number,
      document_currency: String,
      template_language_code: String,
      discount: {
        type: String,
        value: Number,
      },
    },
    group_member_tax_number: String,
  },
  document_partner: {
    id: Number,
    name: String,
    address: {
      country_code: String,
      post_code: String,
      city: String,
      address: String,
    },
    emails: [String],
    taxcode: String,
    iban: String,
    swift: String,
    account_number: String,
    phone: String,
    tax_type: String,
  },
  electronic: Boolean,
  comment: String,
  tags: [String],
  notification_status: String,
  language: String,
  items: [
    {
      product_id: Number,
      name: String,
      net_unit_amount: Number,
      quantity: Number,
      unit: String,
      net_amount: Number,
      gross_amount: Number,
      vat: String,
      vat_amount: Number,
      entitlement: String,
      comment: String,
    },
  ],
  summary: {
    net_amount: Number,
    net_amount_local: Number,
    gross_amount_local: Number,
    vat_amount: Number,
    vat_amount_local: Number,
    vat_rate_summary: [
      {
        vat_name: String,
        vat_percentage: Number,
        vat_rate_net_amount: Number,
        vat_rate_vat_amount: Number,
        vat_rate_vat_amount_local: Number,
        vat_rate_gross_amount: Number,
      },
    ],
  },
  settings: {
    mediated_service: Boolean,
    without_financial_fulfillment: Boolean,
    online_payment: String,
    round: String,
    no_send_onlineszamla_by_user: Boolean,
    order_number: String,
    place_id: Number,
    instant_payment: Boolean,
    selected_type: String,
  },
  online_szamla_status: String,
  related_documents: [
    {
      id: Number,
      invoice_number: String,
    },
  ],
  discount: {
    type: String,
    value: Number,
  },
  correction_type: String,
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
