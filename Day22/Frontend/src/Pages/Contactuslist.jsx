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

function ContactusList() {
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
        const response = await axios.get('http://localhost:8999/contact/getall');
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
        <h2>Query List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>          
              <th>Lastname</th>
              <th>Mobile</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.cid}>
                <td>{item.cid}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.mobile}</td>
                <td>{item.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ContactusList;
