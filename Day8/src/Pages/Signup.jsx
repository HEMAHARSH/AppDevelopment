import React, { useState } from "react";
import "../Assets/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.length === 0 &&
      password.length === 0 &&
      email.length === 0 &&
      number.length === 0
    ) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (number.length < 10) {
      seterror(true);
    } else if (username === password) {
      seterror(true);
      alert("Username and password should not be same");
    } else if (username && password && email && number) {
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
          on
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
          type="email"
          placeholder="Enter your Email"
          value={email}
          on
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>
          {error && email.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>EmailId is required</label>
          ) : (
            ""
          )}
        </span>
        
        <label id="mobile">Mobile Number</label><input
          type="tel"
          placeholder="Enter Mobile number"
          value={number}
          on
          onChange={(e) => setNumber(e.target.value)} maxLength={10}
        />
        <span>
          {error && number.length === 0 ? (
            <label style={{ color: "blue" ,fontSize:'12px' }}>Mobile number is required</label>
          ) : (
            ""
          )}
          {error && number.length > 0 && number.length < 10 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>
              Mobile number must have 10 digits
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
          on
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
