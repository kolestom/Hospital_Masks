import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

const HospitalPage = () => {
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();
  const hospital = location.state.hospital;
  const navigate = useNavigate();
  
  const createOrder = async() => {
    const vat = hospital.address.country_code === 'HU' ? "27%" : "0%"
    const unitPrice = hospital.address.country_code === 'HU' ? 127 : 100

    const resp = await axios.post(
      "http://localhost:7777/api/orders/create_order",
      {
        hospitalID: hospital.id,
        quantity: quantity,
        vat: vat,
        unit_price: unitPrice
      }
    );
    console.log(resp.data)
  }

  return (
    <>
      <h1>{hospital.name}</h1>
      <p>{hospital.address.city}</p>
      <div id='container'>
        <label htmlFor="orderquantity">How many masks would you like to order?</label>
        <input type="number" name='orderquantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        <button onClick={createOrder}>Send Order</button>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  )
}
export default HospitalPage