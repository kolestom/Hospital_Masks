import React from 'react';

function InvoiceCard({ invoice }) {
  

  const handleDownloadPDF = () => {
    // TODO: implement PDF download logic
  };

  return (
    <div className="invoice-card" style={{ border: '1px solid blue',margin: '0.5rem' }}>
      <div className="invoice-card-header">
        <h2>Invoice {invoice.id}</h2>
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>
      <div className="invoice-card-body">
        <p><strong>Order Date:</strong> {invoice.fulfillment_date
}</p>
        <p><strong>Due Date:</strong> {invoice.due_date}</p>
        <p><strong>Quantity:</strong> {invoice.items[0].quantity} pieces</p>
        <p><strong>Net Price:</strong> {invoice.items[0].net_amount} HUF</p>
        <p><strong>VAT:</strong> {invoice.items[0].vat} EUR</p>
        <p><strong>Gross Price:</strong> {invoice.items[0].gross_amount
} HUF</p>
      </div>
    </div>
  );
}

export default InvoiceCard;
