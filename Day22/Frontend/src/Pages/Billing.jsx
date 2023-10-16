import React, { useEffect } from "react";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/Billing.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart, clearCart } from "../Redux/cartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.allCart.cart);
  const [value, setValue] = React.useState();
  const nav = useNavigate();
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.user && user.user.username;
  const isAdmin = isLoggedIn && user.user.username === "admin";
  const [mobilenumber, setMobilenumber] = useState("");
  const [mobilenumberError, setMobilenumberError] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const totalPrice = localStorage.getItem('totalPrice');

  const GetUser = async () => {
    try {
      const token = localStorage.getItem("auth");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  const msg = async (e) => {
    e.preventDefault();
    if (!mobilenumber) {
      setMobilenumberError("Please fill in this field.");
    } else {
      try {
        const paymentData = {
          mobilenumber,
          username: user.user.username,
          paymentmethod: value,
          totalPrice,
          paymentstatus: "success",
        };
        const updatedCart = cart.map((item) => ({
          ...item,
          paid: true,
        }));
        dispatch(setCart(updatedCart));
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        await axios.post(
          "http://localhost:8999/api/v1/auth/postbill",
          paymentData
        );
        dispatch(clearCart());
        alert("Payment successful");
        nav("/home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const cancel = () => {
    nav("/home");
  };

  return (
    <div id="homebodyc2">
      <div id="layerh2">
        <UserNavbar />
        {isLoggedIn ? isAdmin ? (
          <div className="user-details1">
            <center>
              <h1 style={{ color: "white" }}>Admin cannot access billing.</h1>
            </center>
          </div>
        ) : (
          <div id="bill12">
            <div id="bill-container12">
              <div id="billform12">
                <div id="billhead12">
                  <h1>BILLING</h1>
                </div>

                <br />
                <label>
                  MOBILE NUMBER{" "}
                  {mobilenumber.length === 0 && !mobilenumberError && (
                    <span style={{ color: "red" }}>*</span>
                  )}
                  <input
                    id="inputbilling"
                    type="text"
                    placeholder="mobile number"
                    value={mobilenumber}
                    onChange={(e) => {
                      setMobilenumber(e.target.value);
                      setMobilenumberError("");
                    }}
                    maxLength={10}
                    required
                  />
                  {mobilenumberError && (
                    <span style={{ color: "red" }}>{mobilenumberError}</span>
                  )}
                </label>
                <label>
                  PAYMENT TYPE :
                  <select value={value} placeholder="select" onChange={handleChange}>
                    <option value="select">Select</option>
                    <option value="cash">cash</option>
                    <option value="card">card</option>
                  </select>
                </label>
                <br />
                <label>
                  AMOUNT :{totalPrice}
                  <input
                    id="inputbilling"
                    type="number"
                    placeholder="amount"
                    value={totalPrice}
                    readOnly
                  />
                </label>
                <br />
                <br />
                <Button id="list12">
                  <div id="button1" onClick={msg}>
                    Pay
                  </div>
                  <div id="button2" onClick={cancel}>
                    Cancel
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="user-details1">
            <center>
              <h1 style={{ color: "white" }}> Login to make payment.</h1>
            </center>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
