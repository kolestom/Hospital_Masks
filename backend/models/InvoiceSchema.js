const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  id: {
    type: "Number",
  },
  invoice_number: {
    type: "Date",
  },
  type: {
    type: "String",
  },
  correction_type: {
    type: "String",
  },
  cancelled: {
    type: "Boolean",
  },
  block_id: {
    type: "Number",
  },
  payment_status: {
    type: "String",
  },
  payment_method: {
    type: "String",
  },
  gross_total: {
    type: "Number",
  },
  currency: {
    type: "String",
  },
  conversion_rate: {
    type: "Number",
  },
  invoice_date: {
    type: "Date",
  },
  fulfillment_date: {
    type: "Date",
  },
  due_date: {
    type: "Date",
  },
  paid_date: {
    type: "Date",
  },
  organization: {
    name: {
      type: "String",
    },
    tax_number: {
      type: "String",
    },
    bank_account: {
      id: {
        type: "Number",
      },
      name: {
        type: "String",
      },
      account_number: {
        type: "String",
      },
      account_number_iban: {
        type: "String",
      },
      swift: {
        type: "String",
      },
    },
    address: {
      country_code: {
        type: "String",
      },
      post_code: {
        type: "Date",
      },
      city: {
        type: "String",
      },
      address: {
        type: "Date",
      },
    },
    small_taxpayer: {
      type: "Boolean",
    },
    ev_number: {
      type: "String",
    },
    eu_tax_number: {
      type: "String",
    },
    cash_settled: {
      type: "Boolean",
    },
  },
  partner: {
    id: {
      type: "Number",
    },
    name: {
      type: "String",
    },
    address: {
      country_code: {
        type: "String",
      },
      post_code: {
        type: "Date",
      },
      city: {
        type: "String",
      },
      address: {
        type: "Date",
      },
    },
    emails: {
      type: ["String"],
    },
    taxcode: {
      type: "String",
    },
    iban: {
      type: "String",
    },
    swift: {
      type: "String",
    },
    account_number: {
      type: "String",
    },
    phone: {
      type: "String",
    },
    general_ledger_number: {
      type: "String",
    },
    tax_type: {
      type: "String",
    },
    custom_billing_settings: {
      payment_method: {
        type: "Mixed",
      },
      document_form: {
        type: "Mixed",
      },
      due_days: {
        type: "Mixed",
      },
      document_currency: {
        type: "Mixed",
      },
      template_language_code: {
        type: "Mixed",
      },
      discount: {
        type: "Mixed",
      },
    },
    group_member_tax_number: {
      type: "String",
    },
    giro_settings: {
      giro_default_settings: {
        type: "Boolean",
      },
      giro_payment_request_enabled: {
        type: "Boolean",
      },
      giro_different_amount_allowed: {
        type: "Boolean",
      },
    },
    partner_shipping: {
      match: {
        type: "Boolean",
      },
      name: {
        type: "String",
      },
      mode: {
        type: "String",
      },
      address: {
        country_code: {
          type: "String",
        },
        post_code: {
          type: "String",
        },
        city: {
          type: "String",
        },
        address: {
          type: "String",
        },
      },
    },
    internal_comment: {
      type: "String",
    },
    partner_show_type: {
      type: "Mixed",
    },
  },
  document_partner: {
    id: {
      type: "Number",
    },
    name: {
      type: "String",
    },
    address: {
      country_code: {
        type: "String",
      },
      post_code: {
        type: "Date",
      },
      city: {
        type: "String",
      },
      address: {
        type: "Date",
      },
    },
    emails: {
      type: ["String"],
    },
    taxcode: {
      type: "String",
    },
    iban: {
      type: "String",
    },
    swift: {
      type: "String",
    },
    account_number: {
      type: "String",
    },
    phone: {
      type: "String",
    },
    tax_type: {
      type: "String",
    },
    partner_shipping: {
      match: {
        type: "Boolean",
      },
      name: {
        type: "String",
      },
      mode: {
        type: "String",
      },
      address: {
        country_code: {
          type: "String",
        },
        post_code: {
          type: "String",
        },
        city: {
          type: "String",
        },
        address: {
          type: "String",
        },
      },
    },
  },
  electronic: {
    type: "Boolean",
  },
  comment: {
    type: "String",
  },
  tags: {
    type: "Array",
  },
  notification_status: {
    type: "String",
  },
  language: {
    type: "String",
  },
  items: {
    type: ["Mixed"],
  },
  summary: {
    net_amount: {
      type: "Number",
    },
    net_amount_local: {
      type: "Number",
    },
    gross_amount_local: {
      type: "Number",
    },
    vat_amount: {
      type: "Number",
    },
    vat_amount_local: {
      type: "Number",
    },
    vat_rate_summary: {
      type: ["Mixed"],
    },
  },
  settings: {
    mediated_service: {
      type: "Boolean",
    },
    without_financial_fulfillment: {
      type: "Boolean",
    },
    online_payment: {
      type: "String",
    },
    should_send_email: {
      type: "Boolean",
    },
    round: {
      type: "String",
    },
    no_send_onlineszamla_by_user: {
      type: "Boolean",
    },
    order_number: {
      type: "String",
    },
    place_id: {
      type: "Mixed",
    },
    instant_payment: {
      type: "Boolean",
    },
    selected_type: {
      type: "String",
    },
    dont_send_to_nav_reason: {
      type: "Mixed",
    },
    instant_payment_request: {
      type: "Mixed",
    },
  },
  related_documents: {
    type: "Array",
  },
  online_szamla_status: {
    type: "String",
  },
  discount: {
    type: "Mixed",
  },
  recurring_id: {
    type: "Mixed",
  },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
