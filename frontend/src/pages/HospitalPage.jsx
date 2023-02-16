import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import InvoiceCard from "../components/InvoiceCard";

const HospitalPage = () => {
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();
  const hospital = location.state.hospital;
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState(null);

  

  const createOrder = async () => {
    const vat = hospital.address.country_code === "HU" ? "27%" : "0%";
    const unitPrice = hospital.address.country_code === "HU" ? 127 : 100;

    try {
      const resp = await axios.post(
      "http://localhost:7777/api/orders/create_order",
      {
        hospitalID: hospital.id,
        quantity: quantity,
        vat: vat,
        unit_price: unitPrice,
      }
    );
    const actualInvoice =resp.data;
    setInvoices([...invoices,actualInvoice])
    alert("The order has been sent")
    setQuantity(0)
    } catch (error) {
      alert("Order exceeds the on-stock quantity. Please, choose a lesser amount.")
    }
    
  };

  useEffect(() => {
    const getInvoices = async () => {
      const resp = await axios.post(
        "http://localhost:7777/api/orders/order_history",
        {
          hospitalID: hospital.id,
        }
      );
      console.log(resp.data);
      setInvoices(resp.data)
    };
    getInvoices()
  }, []);

  return (
    <>
      <h1>{hospital.name}</h1>
      <p>{hospital.address.city}</p>
      <div className="order-container">
        <label htmlFor="orderquantity">
          How many masks would you like to order?
        </label>
        <input
          type="number"
          name="orderquantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={createOrder}>Send Order</button>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
      <div className="order-history" style={{border: "2px solid red"}}>
        {!invoices && <p>There is no order history</p>}
        {invoices && invoices
          .sort((a,b)=>b.id-a.id)
          .map(item=><InvoiceCard key={item.id} invoice={item}/>)}
      </div>
    </>
  );
};
export default HospitalPage;
