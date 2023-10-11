import React from "react";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/Billing.css";
import { Button } from "@mui/material";
import UserFooter from "../Components/UserFooter";
import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const CartPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalPrice = queryParams.get("totalPrice");
  
  const [value, setValue] = React.useState();
  const nav =useNavigate();
  const user = useSelector((state) => state.user); // Assuming you store user details in Redux
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const generateInvoiceNumber = () => {

    setInvoiceNumber((prevInvoiceNumber) => prevInvoiceNumber + 1);
  };

  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  
  const msg= async (e)=>
  {
   e.preventDefault();
   try{
      const paymentData = {
        invoiceNumber,
        username: user.user.username,
        paymentmethod: value,
        totalPrice,
        paymentstatus:"sucess"
        // ...
      };
      await axios.post("http://localhost:8080/api/v1/auth/postbill", paymentData);}
      catch(error)
      {
        console.log(error);
      }
     
     
  }
 
 const cancel=()=>
 {
  nav("/home");
 }
  return (
    <div id="homebodyc2">
      <div id="layerh2">
        <UserNavbar />
        <div id='bill12'>
        <div id='bill-container12'>
        <div id='billform12'>
        <div id='billhead12'>
        <h1>BILLING</h1>
        </div>
       
        <br/>
        <label>
        INVOICE NO:{" "}
        <input
          id="inputbilling"
          type="text"
          value={invoiceNumber}
          readOnly // Prevent user input
        />
      </label>
        <label>
        PAYMENT TYPE : 
        <select value={value} onChange={handleChange}>
        <option value="cash">cash</option>
        <option value="card">card</option>
        </select>
        </label>
        <br/>
        <label>
        AMOUNT :{" "}
        <input
          id="inputbilling"
          type="number"
          placeholder="amount"
          value={totalPrice}
          readOnly // Display the total price here
        />
      </label>
        <br/>
        <br/>
        <Button id='list12' onClick={generateInvoiceNumber}>
        <div id='button1' onClick={msg}>
        Pay
        </div>
        <div id='button2' onClick={cancel}>Cancel</div>
        </Button>
       
        </div>
        </div>
        </div>

        <UserFooter/>
      </div>
      
    </div>
  );
};

export default CartPage;
