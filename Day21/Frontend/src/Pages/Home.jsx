import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/Home.css";
import UserFooter from "../Components/UserFooter";
export default function Home() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div>
    <div className="homebody">
    <div id="layerhome">
      <UserNavbar />
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img id="imagehome" src={item.img} position="top" alt="..." />
            <ul id="listcart">
            <li>Complementry Food</li>
            <li>Free wifi</li>
              <li>{item.title}</li>
              <li>{item.price} Rs/-</li>
              <button onClick={() => dispatch(addToCart(item))}>
                Book now
              </button>
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
    <UserFooter/>
    </div>
  );
}
