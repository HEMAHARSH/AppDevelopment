import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { SidebarData } from "../Components/SidebarData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import myImage from "../Images/logo-removebg-preview.png";
import "../Assets/Dashboard.css";
import axios from "axios";



function Dashboard() {
  const user = useSelector(selectUser);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";

    const isLoggedIn = user.user && user.user.username;
    const nav = useNavigate();
    useEffect(() => {
      if (!isLoggedIn || user.user.username !== "admin") {
        nav("/");  }
    }, [isLoggedIn, nav, user]);
    const [datavacant, setDatavacant] = useState([]);
    const [roomsbooked,setRoomsbooked]=useState([]);
    const [totalamount,setTotalamount]=useState([]);
    const [totaluser,setTotaluser]=useState([]);
    const [totaluserfeedback,setTotaluserfeedback]=useState([]);
    const [totalcountController,setTotalcountController]=useState([]);
    const fetchData = async () => {
      try {
        setDatavacant( (await axios.get('http://localhost:8999/api/v1/auth/difference')).data);
        setRoomsbooked((await axios.get("http://localhost:8999/api/v1/auth/booked")).data);
        setTotalamount((await axios.get("http://localhost:8999/api/v1/auth/total")).data);
        setTotaluser((await axios.get("http://localhost:8999/api/v1/auth/totalcount")).data );
        setTotalcountController((await axios.get("http://localhost:8999/api/v1/auth/totalcountcontroller")).data );
        setTotaluserfeedback((await axios.get("http://localhost:8999/api/v1/auth/count")).data );
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div >
    { isLoggedIn ? (
  <>
      <div className="navbar">
        <img id="logoimg" src={myImage} alt="Logo"/>
        
        <hr style={{ width: "93px" }} /><h1 id="zost">Zostel</h1>
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
      
     <div id="wrap">
      <div id="bar">
        <h3 id="box">
          Rooms availabilty
          <h4>200</h4>
        </h3>
        <br />
        <h3 id="box">Vacanct rooms <h5>{datavacant}</h5></h3>
        <br />
        <h3 id="box">
          Rooms Booked<h5>{roomsbooked}</h5>
        </h3>
      
        <h3 id="box">
          Total Earning<h5>{totalamount}</h5>
        </h3>
      </div>
      <br/><br/><br/><br/><br/>
       <div id="bar1">
        <h3 id="box1">
         Registered users<h5>{totaluser}</h5>
        </h3>
        <br />
        <h3 id="box1">Queries count<h5>{totalcountController}</h5></h3>
        <br />
        <h3 id="box1">
          Feedbacks count<h5>{totaluserfeedback}</h5>
        </h3>
      
        <h3 id="box">
          Total Earning<h5>{totalamount}</h5>
        </h3>
      </div>
      </div>
      <div style={{ textAlign: "center",marginLeft:'20%' }}>
    
     
        </div>
        
       
        </>
        ):(<div className="user-details1">
        <center>
          <h1 style={{ color: "white" }}> Login as admin to access this page.</h1>
        </center>
      </div>)}
      </div> 
      
    
  );
}

export default Dashboard;
