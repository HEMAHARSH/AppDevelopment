import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';

import '../Assets/ContactUs.css'

import UserFooter from '../Components/UserFooter';
import UserNavbar from '../Components/UserNavbar';

function ContactUs() {
  const[firstname,setFirstname]=useState(" ");
  const[lastname,setlastname]=useState(" ");
  const[mobile,setMobile]=useState(" ");
const[query,setQuery]=useState(" ");
const submitquery=(e)=>{
  e.preventDefault();

}

  return (
    <div id="bodyContact">
    <div id="layerContact">
    <UserNavbar/>
    <div id='containhead'>    <p>GET IN TOUCH WITH US</p>
    <div id='containercu'>
    <div id='ic'>
    <h1>CONTACT US ON:</h1>
    <li>
    <a className="generic-anchor footer-list-anchor"><FacebookIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor"><InstagramIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor"><LinkedInIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor"><PinterestIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor"><YouTubeIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor"><TelegramIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor"><TwitterIcon fontSize='medium'/></a>
    </li>
    <br/>
    <li>
    <a className="generic-anchor footer-list-anchor"><CallIcon fontSize='medium' id='icon'/>   +91 7895461230  </a>
    </li>
    <br/>
    <li>
    <a className="generic-anchor footer-list-anchor"><MapIcon fontSize='medium' id='icon'/>  SKCT, Kovaipudur, <br/>&nbsp; Coimbatore, TN 641042</a>
    </li>
    </div>
    <div id='line2345'>
    
    
    </div>
   
    <div id='cu'>
    <form id='submitqueryform'>
    <center><h1>Message Us</h1></center>
    <label for="uname">Firstname</label>
      <div className="uname">
        <input id="usernamewer" style={{color:'wheat'}} type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}  required/>
      </div><br/>
     
      <label for="uname">Lastname</label>
      <div className="uname">
        <input id="usernamewer"  style={{color:'wheat'}} type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} required/>
      </div><br/>
      <label for="uname">Mobile</label>
      <div className="uname">
        <input id="usernamewer" style={{color:'wheat'}} type="tel" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
      </div><br/>
      <label for="uname">Query</label>
      <div className="query">
        <input id="usernamewer" style={{color:'wheat'}} type="text" value={query} onChange={(e)=>setQuery(e.target.value)} required/>
      
      </div>
      <button>Submit</button>
      
    </form>
    </div>
    
    </div>
    </div>
    <UserFooter/>
    </div>
    </div>
  )
}

export default ContactUs