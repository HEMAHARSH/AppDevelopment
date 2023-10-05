import React from 'react'
import List from "../Components/List"

import '../Assets/ReservedList.css'
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { SidebarData } from "../Components/SidebarData";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import myImage from "../Images/logo-removebg-preview.png";
import "../Assets/Dashboard.css";
function ReservedList() {
  const user = useSelector(selectUser);
 

  console.log("User object:", user);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
  return (
    <div >
      <div className="navbar">
        <img id="logoimg" src={myImage} alt="Logo"/>
        
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
        </ul>
      </div>

      <Header />
      <div id="welcome">Hello {username}!</div>
      
      <div className='containers'>
      <h2>Reserved List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CheckIn Date</th>
            <th>CheckOut Date</th>
            <th>Room Types</th>
            <th>Bill</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
          {List.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.checkindate}</td>
              <td>{item.checkoutdate}</td>
              <td>{item.roomtypes}</td>
              <td>{item.bill}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
        
        <Footer/>
      </div> 
      
    
  );
}

export default ReservedList;
