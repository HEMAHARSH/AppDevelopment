import React, { useState } from "react";
import "../Assets/Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [emailid, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username.length === 0 &&
      password.length === 0 &&
      emailid.length === 0 &&
      mobileno
.length === 0
    ) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (mobileno
.length < 10) {
      seterror(true);
    } else if (username === password) {
      seterror(true);
      alert("Username and password should not be same");
    } else if (username  && emailid && mobileno
 && password) {
      await axios.post("http://localhost:8999/api/v1/auth/register",{username,emailid,mobileno
,password});
      navigate("/");
    }
  };
  return (
    <div className="body">
    <div style={{ float: "left", position: "relative", zIndex: "1" ,color:"whitesmoke",top:'220px',left:'70px'}}>
        <h1 style={{fontFamily:"monospace", fontSize:'32px'}}>There is the best,worth way to get<br/>cherished,refreshed and cheered.</h1>{" "}
        
        <h4 style={{fontSize:'14px'}}>We provide better services and experience for your happy stays and journey.</h4>
        <h4 style={{fontSize:'14px'}}>Tie up with us with your details for discounts and savings on .</h4>
      </div>
      <div className="layer"></div>
      <form onSubmit={handleSubmit} className="cover2">
        <br/>
        <br/>
       <label id="username">Username</label> <input
          type="text"
          placeholder="Enter Username"
          value={username}
          
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>
          {error && username.length === 0 ? (
            <label style={{ color: "blue" ,fontSize:'12px'}}>Username is required</label>
          ) : (
            ""
          )}
        </span>
        <label id="email">Email</label><input
          type="emailid"
          placeholder="Enter your Email"
          value={emailid}
          
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>
          {error && emailid.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>EmailId is required</label>
          ) : (
            ""
          )}
        </span>
        
        <label id="mobile">Mobile Number</label><input
          type="tel"
          placeholder="Enter Mobile mobileno
    "
          value={mobileno
    }
          
          onChange={(e) => setMobileno
        (e.target.value)} maxLength={10}
        />
        <span>
          {error && mobileno
      .length === 0 ? (
            <label style={{ color: "blue" ,fontSize:'12px' }}>Mobile mobileno
       is required</label>
          ) : (
            ""
          )}
          {error && mobileno
      .length > 0 && mobileno
      .length < 10 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>
              Mobile mobileno
         must have 10 digits
            </label>
          ) : (
            ""
          )}
        </span>
        <label id="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          {error && password.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>Password is required</label>
          ) : (
            ""
          )}

          {error && password.length > 0 && password.length < 8 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>
              Password should contain atleast 8 characters
            </label>
          ) : (
            ""
          )}
        </span>

        <button type="submit" className="signup-btn1">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
