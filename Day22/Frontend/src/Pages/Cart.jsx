import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  getCartTotal,
  removeItem,
  setCheckInDate,
  setCheckOutDate,
} from "../Redux/cartSlice";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/Cart.css";
import axios from "axios";

const Cart = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleDateChange = (item, checkInDate, checkOutDate) => {
    dispatch(setCheckInDate({ itemId: item.id, checkInDate }));
    dispatch(setCheckOutDate({ itemId: item.id, checkOutDate }));
  };

  const calculateDifference = (checkInDate, checkOutDate) => {
    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    const diff = Math.abs(d1 - d2);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const calculatedPrice = cart.reduce((acc, item) => {
        const diffDays = calculateDifference(item.date1, item.date2);
        return acc + diffDays * item.price;
      }, 0);

      setTotalPrice(calculatedPrice);
    };

    calculateTotalPrice();
  }, [cart]);

  const user = useSelector((state) => state.user);
  const username = user.user && user.user.username;
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('totalPrice', totalPrice);

  const billingamount = async () => {
    await axios.post("http://localhost:8999/api/v1/auth/post", {
      amount: totalPrice,
      billingstatus: "paid",
      name: username,
      quantity: totalQuantity,
    });
    nav(`/bill`);
  };

  const billingcancel = async () => {
    await axios.post("http://localhost:8999/api/v1/auth/post", {
      amount: totalPrice,
      billingstatus: "cancelled",
      name: username,
      quantity: totalQuantity,
    });
    nav(`/home`);
    dispatch(clearCart());
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
            <div id="card-body" key={data.id}>
              <p style={{ color: "white", fontFamily: "fantasy" }}>
                <strong>{data.title}</strong>
              </p>
              <div className="datefill">
                <div className="date">
                  &nbsp;Check-In Date{" "}
                  <input
                    type="date"
                    value={data.date1}
                    onChange={(e) => handleDateChange(data, e.target.value, data.date2)}
                  />
                </div>
                <div className="date">
                  Check-Out Date
                  <input
                    type="date"
                    value={data.date2}
                    onChange={(e) => handleDateChange(data, data.date1, e.target.value)}
                  />
                </div>

                {totalPrice !== null && (
                  <h1 style={{ color: "white" }}>
                    Total Price: {(calculateDifference(data.date1, data.date2) * data.price) || null}
                  </h1>
                )}
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
          <ul style={{ color: "white", listStyleType: "none" }}>
            <li>
              <strong>Total Quantity</strong>
              <br />
              <strong>{totalQuantity}</strong>
            </li>
            {totalPrice !== null && (
              <li>
                <strong>Total amount</strong>
                <br />
                <strong>{totalPrice || null}</strong>
                <br />
              </li>
            )}
          </ul>
          <button type="button" onClick={billingamount}>
            Make Payment
          </button>
          <br />
          <button type="button" onClick={billingcancel}>Cancel Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
