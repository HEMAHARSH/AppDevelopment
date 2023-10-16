import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Assets/ReservedList.css';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import { SidebarData } from '../Components/SidebarData';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import myImage from '../Images/logo-removebg-preview.png';
import '../Assets/Dashboard.css';

function PaymentStatus() {
  const user = useSelector(selectUser);
  const [data, setData] = useState([]);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const isLoggedIn = user.user && user.user.username;
  const nav = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || user.user.username !== 'admin') {
      nav('/');
    }
  }, [isLoggedIn, user.user.username, nav]);

  // Define an async function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8999/api/v1/auth/getbill');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call the fetchData function inside useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="navbar">
        <img id="logoimg" src={myImage} alt="Logo" />
        <h1 id="zost">Zostel</h1>
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
        </ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>

      <Header />
      <div id="welcome">Hello {username}!</div>

      <div className="containers">
        <h2>Payment List</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Payment Method</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.userid}>
              <td>{item.userid}</td>
                <td>{item.username}</td>
                <td>{item.mobilenumber}</td>
                <td>{item.paymentmethod}</td>
                <td>{item.totalPrice}</td>
                <td>{item.paymentstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default PaymentStatus;
