import React, { useEffect, useState } from 'react';

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

function Feedbacklist() {
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

    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8999/api/v1/auth/getallfeedback');
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
        <h2>Feedbacks</h2>
        <table style={{marginLeft:'10%'}}>
          <thead>
            <tr>
              <th>Name</th>          
              <th>Comments</th>
              <th>Service Rating</th>
              <th>Worth for money rating</th>
              <th>Cleanliness rating</th>
              <th>Comfortness rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.comments}</td>
                <td>{item.service}</td>
                <td>{item.valueForMoney}</td>
                <td>{item.cleanliness}</td>
                <td>{item.comfort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Feedbacklist;
