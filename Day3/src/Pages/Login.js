import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../Assets/Login.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 && password.length === 0) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (username && password) {
      navigate("/home");
    }
  };
  return (
    <div className="body">
      <div className="layer"></div>
      <form onSubmit={handleSubmit} className="cover1">
        <h1 className="logintxt">Login</h1>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          on
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>
          {error && username.length === 0 ? (
            <label style={{ color: "red" }}>Username is required</label>
          ) : (
            ""
          )}
        </span>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          on
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          {error && password.length === 0 ? (
            <label style={{ color: "red" }}>Password is required</label>
          ) : (
            ""
          )}

          {error && password.length > 0 && password.length < 8 ? (
            <label style={{ color: "red" }}>
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
