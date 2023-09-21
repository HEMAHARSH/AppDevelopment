import React from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { SidebarData } from "../Components/SidebarData";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

import myImage from "../Images/logo-removebg-preview.png";

import "../Assets/Dashboard.css";
function Dashboard() {
  const user = useSelector(selectUser);
  console.log("User object:", user);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
  return (
    <div className="container">
      <div className="navbar">
        <img id="logoimg" src={myImage} alt="Logo" />
        <h1 id="zost">Zostel</h1>
        <hr style={{ width: "93px" }} />
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span id="tit">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Header />
      <div id="welcome">Welcome, {username}!</div>
      <div id="bar">
        <h3 id="box">
          Rooms availabilty
          <h5>20</h5>
        </h3>
        <br />
        <h3 id="box">Vacanct rooms <h5>8</h5></h3>
        <br />
        <h3 id="box">
          Active rooms<h5>16</h5>
        </h3></div><div id="bar">
        <h3 id="box">
          Cancelled reservations<h5>16</h5>
        </h3>
        <h3 id="box">
          No.of.Active<h5>16</h5>
        </h3>
      </div>
    </div>
  );
}

export default Dashboard;
