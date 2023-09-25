import React from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { SidebarData } from "../Components/SidebarData";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import myImage from "../Images/logo-removebg-preview.png";
import "../Assets/Dashboard.css";

function PrivacyPolicy() {
  const user = useSelector(selectUser);

  console.log("User object:", user);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
  return (
    <div>
      <div style={{ height: "950px" }} className="navbar">
        <img id="logoimg" src={myImage} alt="Logo" />
        <h1 id="zost">Zostel</h1>
        <hr style={{ width: "93px" }} />
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
        </ul>
      </div>

      <Header />
      <div id="welcome">Hello {username}!</div>
      <div id="textpri">
        <h2 style={{ color: "#330000" }}>Privacy Policy</h2>
        <br />
        <h5 style={{ color: "rgba(7, 4, 0, 0.684)" }}>
          Privacy policy is required by the law and this policy only applies to
          zostel (zo.xyz) and not to the websites of other companies,
          individuals or organisations to whom we provide links to our websites.
        </h5>
        <br />
        <h3>Use of Your Information</h3>
        <br />
        <h5 style={{ color: "rgba(7, 4, 0, 0.684)" }}>
          We collect your information for the safety of our users who use our
          platform and guests who book through zostel to understand who we are
          accommodating at our partner properties, for the safety of staff. In
          addition, website user and guest data is collected for statistical
          purposes. We also collect our guests’ nationality, date of birth,
          gender, for statistical analysis purposes. When you visit our
          websites, we may automatically log your IP address (the unique address
          which identifies your computer on the internet). We use IP addresses
          to help us manage our websites and to collect broad demographic
          information for analytical use. For reservations, we send guests
          confirmation emails and will therefore require your email address.
          Exceptions may occur in the case of us needing to contact previous
          guests in relation to post or lost property.
        </h5>
        <br />
        <h3>Reservation Data</h3>
        <br />
        <h5 style={{ color: "rgba(7, 4, 0, 0.684)" }}>
          In order for us to confirm a reservation for you, we do require some
          information. This will usually consist of:
          <br />
          Your name
          <br />
          Telephone or mobile number – in case of an emergency
          <br />
          Gender
          <br />
          Nationality
          <br />
          Date of Birth
          <br />
          Identification data i.e. Passport, Driving License details
          <br />
          Credit card details, including the three-digit code that appears on
          the back of your credit card
          <br />
          Date of arrival and departure
          <br />
          Email address
          <br />
        </h5>
        <br />
        <h3>Keeping Guests' Information Updated</h3>
        <br />
        <h5 style={{ color: "rgba(7, 4, 0, 0.684)" }}>
          We have guests returning to our partner properties on a regular basis.
          It is your duty to inform us if any of your personal information,
          which we hold about you, needs to be updated. We may contact you at
          any time.
        </h5>
        <br />
        <h3>Changes to Our Privacy Policy</h3>
        <br />
        <h5 style={{ color: "rgba(7, 4, 0, 0.684)" }}>
          We may change our Privacy Policy at any time. Continued use of our
          website signifies that you agree to any such changes.
        </h5>{" "}
      </div><br/>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
