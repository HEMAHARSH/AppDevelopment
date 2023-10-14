import React, { useEffect, useState } from 'react';
import List from "../Components/List";
import '../Assets/ReservedList.css';
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { SidebarData } from "../Components/SidebarData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import myImage from "../Images/logo-removebg-preview.png";
import "../Assets/Dashboard.css";
import axios from 'axios';

function BillingStatus() {
  const user = useSelector(selectUser);
  const [data, setData] = useState([]);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  const isLoggedIn = user.user && user.user.username;
  const nav = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || user.user.username !== "admin") {
      nav("/");
    }
  }, [isLoggedIn, user.user.username, nav]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/get');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="navbar">
        <img id="logoimg" src={myImage} alt="Logo"/>
        <h1 id="zost">Zostel</h1>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span id="tit">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>

      <div id="welcome">Hello {username}!</div>

      <div className='containers'>
        <h2>Billing Status</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>          
              <th>Bill Amount</th>
              <th>Room count</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.listId}>
                <td>{item.listId}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.quantity}</td>
                <td>{item.billingstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default BillingStatus;
