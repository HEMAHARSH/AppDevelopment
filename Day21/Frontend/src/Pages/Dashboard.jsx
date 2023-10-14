import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { SidebarData } from "../Components/SidebarData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import myImage from "../Images/logo-removebg-preview.png";
import "../Assets/Dashboard.css";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,Cell
} from "recharts";
import axios from "axios";


function Dashboard() {
  const user = useSelector(selectUser);
  const data = [
    { name: "Jan", rooms: 200 },
    { name: "Feb", rooms: 150 },
    { name: "Mar", rooms: 135 },
    { name: "April", rooms: 154 },
    { name: "May", rooms: 123 },
    { name: "June", rooms: 104 },
    { name: "July", rooms: 135 },
    { name: "Aug", rooms: 154},
    { name: "Sept", rooms: 100 },
    { name: "Oct", rooms: 154 },
    { name: "Nov", rooms: 109 },
    { name: "Dec", rooms: 135 },
  ];
  const piedata = [
    { name: "Single cot", rooms: 20 },
    { name: "Two sharing", rooms: 15 },
    { name: "Four sharing", rooms: 23 },
    { name: "Six sharing", rooms: 15 },
    
  ];
  const COLORS = ['#42112c', '#6b0224', '#072140', '#b8337c'];

  const username =
    user.user && user.user.username ? user.user.username : "Guest";

    const isLoggedIn = user.user && user.user.username;
    const nav = useNavigate();
    useEffect(() => {
      if (!isLoggedIn || user.user.username !== "admin") {
        // If the user is not authenticated or is not "admin," redirect them to the login page
        nav("/"); // You should update this to the correct login page URL
      }
    }, [isLoggedIn, nav, user]);
    const [datavacant, setDatavacant] = useState([]);
    const [roomsbooked,setRoomsbooked]=useState([]);
    const [totalamount,setTotalamount]=useState([]);
    const fetchData = async () => {
      try {
        setDatavacant( (await axios.get('http://localhost:8080/api/v1/auth/difference')).data);
        setRoomsbooked((await axios.get("http://localhost:8080/api/v1/auth/booked")).data);
        setTotalamount((await axios.get("http://localhost:8080/api/v1/auth/total")).data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData(); // Call the GET request when the component mounts
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
      </div>
      <div style={{ textAlign: "center",marginLeft:'20%' }}>
      <h4 id="Bookings">Reservation Statistics</h4>
      <div className="charts">
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 7, right: 7 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="rooms" fill="#6b5759" background={{ fill: "#eee" }} />
        </BarChart>
        <h4 id="roomocc">Type of rooms occupied
        <br/>
        <h5 style={{color:"#42112c"}}>Total Single cot-40</h5>
        <h5 style={{color:"#6b0224"}}>Total Two sharing-60</h5>
        <h5 style={{color:"#072140"}}>Total Four sharing-65</h5>
        <h5 style={{color:"#b8337c"}}>Total Six sharing-35</h5></h4>
        <PieChart className="pchart1" width={400} height={400}>
          <Pie
            dataKey="rooms"
            isAnimationActive={false}
            data={piedata}
            cx={200}
            cy={200}
          
            outerRadius={70}
            fill="#ae301f87"
  
            label
          >{data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}</Pie>
          <Tooltip />
        </PieChart>
        </div>
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
