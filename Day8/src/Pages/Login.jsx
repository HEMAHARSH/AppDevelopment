import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../Assets/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";

function Signup() {
  const [username, setUsername] = useState("");
  const dispatch =useDispatch();
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin@123") {
      dispatch(login(username));
      navigate("/dashboard");
      }
    else if (username.length === 0 && password.length === 0) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (username && password) {
      dispatch(login(username));
      navigate("/home");
    }
    
  };
  return (
    <div className="body">
      <div style={{ float: "left", position: "relative", zIndex: "1" ,color:"whitesmoke",top:'230px',left:'70px'}}>
        <h1 style={{fontFamily:"monospace", fontSize:'30px',textAlign:"left"}}>There is the best,worth way to get<br/>cherished,refreshed and cheered.</h1>{" "}
        
        <h2 style={{fontSize:'14px'}}>Login to enjoy your return discounts and offers .</h2>
      </div>
      <div className="layer"></div>
      <form onSubmit={handleSubmit} className="cover1">
        <h1 className="logintxt">Welcome you again!</h1>

        <label id="username">Username</label>
        <input id="inputuser"
          type="text"
          placeholder="Enter your Username"
          value={username}
          on
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>
          {error && username.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>Username is required</label>
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
            <label style={{ color: "blue" ,fontSize:'12px'}}>
              Password should contain atleast 8 characters
            </label>
          ) : (
            ""
          )}
        </span>
        <button type="submit" className="login-btn">
          Login
        </button>
        <h2 className="account">Don't have account?</h2>
        <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
