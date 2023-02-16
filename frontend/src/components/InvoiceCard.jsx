import React from "react";
import axios from "axios";

function InvoiceCard({ invoice }) {
  const showInvoice = async () => {
    const response = await axios.post(
      "http://localhost:7777/api/orders/invoice_url",
      {
        invoiceId: invoice.id,
      }
    );
    const URL = response.data
    window.open(URL, "_blank");
  };

  return (
    <div className="invoice-card">
      <div className="invoice-card-header">
        <h2>Invoice {invoice.id}</h2>
        <button onClick={showInvoice}>Show invoice</button>
      </div>
      <div className="invoice-card-body">
        <p>
          <strong>Order Date:</strong> {invoice.invoice_date}
        </p>
        <p>
          <strong>Fullfillment Date:</strong> {invoice.fulfillment_date}
        </p>
        <p>
          <strong>Due Date:</strong> {invoice.due_date}
        </p>
        <p>
          <strong>Quantity:</strong> {invoice.items[0].quantity} pieces
        </p>
        <p>
          <strong>Net Price:</strong> {invoice.items[0].net_amount} HUF
        </p>
        <p>
          <strong>VAT:</strong> {invoice.items[0].vat} EUR
        </p>
        <p>
          <strong>Gross Price:</strong> {invoice.items[0].gross_amount} HUF
        </p>
      </div>
    </div>
  );
}

export default InvoiceCard;
