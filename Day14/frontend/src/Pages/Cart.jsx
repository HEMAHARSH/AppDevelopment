import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getCartTotal,
  removeItem,
  setTotalPrice,
  decreaseItemQuantity,
  increaseItemQuantity,
  addItem, // Import the new action
} from "../Redux/cartSlice";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/Cart.css";
import { colors } from "@mui/material";

const Cart = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const nav=useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [difference, setDifference] = useState("");

  const calculateDifference = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d1 - d2);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDifference(diffDays);
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate and update the total price whenever the cart or dates change
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      for (const item of cart) {
        // Calculate the price for each item based on the difference in dates
        const itemPrice = difference * item.price; // Make sure difference is defined elsewhere
        totalPrice += itemPrice;
      }
      setTotalPrice(totalPrice);
      
    };

    calculateTotalPrice();
    
  }, [cart, difference]
  
  
  );

  const billingamount=() => {
    
    nav("/bill");
  };

  return (
    <div className="homebodyc">
      <div id="layerh">
        <UserNavbar />
        <h5 style={{ color: "white", marginLeft: "80%" }}>
          Cart - {cart.length} items
        </h5>
        <div>
          {cart?.map((data) => (
            <div id="card-body">
              <p style={{ color: "white", fontFamily: "fantasy" }}>
                <strong>{data.title}</strong>
              </p>
              <div className="datefill">
                <div className="date">
                  &nbsp;CheckIn Date{" "}
                  <input
                    type="date"
                    value={date1}
                    onChange={(e) => setDate1(e.target.value)}
                  />
                </div>
                <div className="date">
                  CheckOut Date
                  <input
                    type="date"
                    value={date2}
                    onChange={(e) => setDate2(e.target.value)}
                  />
                </div>
                <button onClick={calculateDifference}>Calculate</button>
                <h1 style={{ color: "white" }}>
                  Total Price: {difference * data.price}{" "}
                </h1>
              </div>

              <div id="dispcart1">
                <button
                  type="button"
                  title="Remove item"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  Remove
                </button>
              </div>
             
            </div>
            
          ))}
        </div>

        <div className="card2-body">
          <h3 className="summary">Summary</h3>
          <ul style={{color:'white',listStyleType:'none'}}>
            <li >
              <strong>Total Quantity</strong>
              <br />
              <strong>{totalQuantity}</strong>
            </li>

            <li>
              <strong>Total amount</strong>
              <br />
              <strong>{totalPrice}</strong>
            </li>
          </ul>
          <button type="button" onClick={billingamount}>
          Make Payment
        </button>
          
        
        </div>
      </div>
    </div>
  );
};

export default Cart;
