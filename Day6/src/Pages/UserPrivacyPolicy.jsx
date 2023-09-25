import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import UserNavbar from "../Components/UserNavbar";
import "../Assets/UserPrivacyPolicy.css";
import UserFooter from "../Components/UserFooter";
export default function UserPrivacyPolicy() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div>
    <div className="homebody123">
    <div id="layerhome123">
      <UserNavbar/>
      <div id="textpri123">
        <h2 style={{ color: "rgb(235, 106, 13)" }}>Privacy Policy</h2>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          Privacy policy is required by the law and this policy only applies to
          zostel (zo.xyz) and not to the websites of other companies,
          individuals or organisations to whom we provide links to our websites.
        </h5>
        <br />
        <h3>Use of Your Information</h3>
        <br />
        <h5 style={{ color: "#ffffff" }}>
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
        <h5 style={{ color: "#ffffff" }}>
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
        <h5 style={{ color: "#ffffff" }}>
          We have guests returning to our partner properties on a regular basis.
          It is your duty to inform us if any of your personal information,
          which we hold about you, needs to be updated. We may contact you at
          any time.
        </h5>
        <br />
        <h3>Changes to Our Privacy Policy</h3>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          We may change our Privacy Policy at any time. Continued use of our
          website signifies that you agree to any such changes.
        </h5>{" "}
      </div>
      </div>
    </div>
    <UserFooter/>
    </div>
  );
}
