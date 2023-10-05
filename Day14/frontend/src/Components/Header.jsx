import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Header.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  const user = useSelector(selectUser);
  console.log("User object:", user);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
    <div className="cover123">
      <ul className="menu">
        <li className="menu-item">
        <div id="disp">{username}</div><AccountCircleIcon className="picture"/>
        
          </li>
      </ul>
    </div>
    </div>
  );
}

export default Header;


