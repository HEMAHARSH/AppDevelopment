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
      <div className="layer"></div>
      <form onSubmit={handleSubmit} className="cover">
        <h1 className="signuptxt1">Signup</h1>
        <input
          type="text"
          placeholder="Enter Username"
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
          type="email"
          placeholder="Enter your Email"
          value={email}
          on
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>
          {error && email.length === 0 ? (
            <label style={{ color: "red" }}>EmailId is required</label>
          ) : (
            ""
          )}
        </span>
        <input
          type="tel"
          placeholder="Enter Mobile number"
          value={number}
          on
          onChange={(e) => setNumber(e.target.value)}
        />
        <span>
          {error && number.length === 0 ? (
            <label style={{ color: "red" }}>Mobile number is required</label>
          ) : (
            ""
          )}
          {error && number.length > 0 && number.length < 10 ? (
            <label style={{ color: "red" }}>
              Mobile number must have 10 digits
            </label>
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

        <button type="submit" className="signup-btn1">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
