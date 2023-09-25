import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getCartTotal } from "../Redux/cartSlice";
import { selectUser } from "../Redux/userSlice";
import "../Components/Header.css";
import myImage from "../Images/logo-removebg-preview.png";
export default function UserNavbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line
  }, [cart]);
  const user = useSelector(selectUser);
  console.log("User object:", user);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
 
  return (
    <div className="cover1234">
      <ul className="menu4">
      <img id="logoimg1" src={myImage} alt="Logo"/>
      <li id="zost1">Zostel</li>
        <li className="menu-item4">
          <div id="disp">{username}</div>
          <AccountCircleIcon className="picture" />
        </li>
        <li><div><Link id="disp1" to="/cart">Cart({totalQuantity}) </Link></div></li>
        <li><div><Link id="disp1" to="/aboutus">AboutUs</Link></div></li>
        <li><div><Link id="disp1" to="/home">Home</Link></div></li>
      </ul>
    </div>
  );
}
