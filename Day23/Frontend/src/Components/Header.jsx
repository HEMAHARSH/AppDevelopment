import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../Redux/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
  
    dispatch(logout());
  };
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
    <div className="cover123">
      <ul className="menu">
        <li className="menu-item">
        {user.user && user.user.username==="admin" ? (
          <container id="headeradmin">
          <button id="disp2" onClick={handleLogout}>Logout</button>
          <div id="disp">{username}</div>
          <AccountCircleIcon className="picture" />
          </container>
          ) :(<Link to="/">
          <button id="disp2">LOGIN</button>
        </Link>
            
        )}
            
          </li>
          
      </ul>
    </div>
    </div>
  );
}

export default Header;


