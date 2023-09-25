import React from "react";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/Billing.css";
import { Button } from "@mui/material";
import UserFooter from "../Components/UserFooter";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const [value, setValue] = React.useState();
  const nav =useNavigate();

  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  const msg=()=>
  {
    alert("Payment Succesfull");
  }
  const backtocart=()=>
  {
   nav("/cart");
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
        INVOICE NO : <input id="inputbilling" type="number" placeholder="invoice no"/>
        </label>
        <label>
        PAYMENT TYPE : 
        <select value={value} onChange={handleChange}>
        <option value="cash">cash</option>
        <option value="card">card</option>
        </select>
        </label>
        <br/>
        <label>AMOUNT : <input  id="inputbilling" type="number" placeholder="amount"/>
        </label>
        <br/>
        <br/>
        <Button id='list12'>
        <div id='button1' onClick={msg}>
        Payment
        </div>
        
        <div id='button2' onClick={backtocart}>
        Cancel
        </div>
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
