import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import InvoiceCard from "../components/InvoiceCard";
import "./HospitalPage.css";

const HospitalPage = () => {
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();
  const hospital = location.state.hospital;
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState(null);
  const [orderDate, setOrderDate] = useState(new Date());
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const vat = hospital.address.country_code === "HU" ? "27%" : "0%";
  const unitPrice = hospital.address.country_code === "HU" ? 127 : 100;

  const createOrder = async () => {

    try {
      const resp = await axios.post(
        "http://localhost:7777/api/orders/create_order",
        {
          hospitalID: hospital.id,
          quantity: quantity,
          vat: vat,
          unit_price: unitPrice,
          fulfillment_date: orderDate,
        }
      );
      const actualInvoice = resp.data;
      setInvoices([...invoices, actualInvoice]);
      alert("The order has been sent");
      setQuantity(0);
      const maskQuantityInStock = await axios.get(
        "http://localhost:7777/api/orders/available_quantity"
      );
      setAvailableQuantity(maskQuantityInStock.data);
    } catch (error) {
      alert(
        "Order exceeds the on-stock quantity. Please, choose a lesser amount."
      );
    }
  };

  useEffect(() => {
    const getInvoicesAndQuantity = async () => {
      const resp = await axios.post(
        "http://localhost:7777/api/orders/order_history",
        {
          hospitalID: hospital.id,
        }
      );
      console.log(resp.data);
      setInvoices(resp.data);

      const maskQuantityInStock = await axios.get(
        "http://localhost:7777/api/orders/available_quantity"
      );
      setAvailableQuantity(maskQuantityInStock.data);
    };

    getInvoicesAndQuantity();
  }, []);

  return (
    <div id="hospital-page">
      <div id="hospital-page-hospital">
        <h1>{hospital.name}</h1>
        <p>{hospital.address.city}</p>
      </div>
      <div className="order-container">
        <label htmlFor="orderquantity">
          How many masks would you like to order? (Available:{" "}
          {availableQuantity})
        </label>
        <br/>
        <input
          type="number"
          min={0}
          name="orderquantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="orderdate">When do you need the masks by?</label>
        <input
          type="date"
          name="orderdate"
          value={orderDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setOrderDate(e.target.value)}
        />
        <button onClick={createOrder}>Send Order</button>
        <button onClick={() => navigate(-1)}>Go back</button>
        <div>Total price: {quantity*unitPrice}</div>
      </div>
      <div className="order-history">
        {!invoices && <p>There is no order history</p>}
        {invoices &&
          invoices
            .sort((a, b) => b.id - a.id)
            .map((item) => <InvoiceCard key={item.id} invoice={item} />)}
      </div>
    </div>
  );
};
export default HospitalPage;
