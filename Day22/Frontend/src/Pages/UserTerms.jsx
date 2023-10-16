import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import UserNavbar from "../Components/UserNavbar";
import "../Assets/UserPrivacyPolicy.css";
import UserFooter from "../Components/UserFooter";
export default function UserTerms() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div>
    <div className="homebody1234">
    <div id="layerhome1234">
      <UserNavbar />
      
      <div id="textpri123">
        <h2 style={{ color: "rgb(235, 106, 13)" }}>Terms and Conditions</h2>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          PLEASE READ THESE TERMS AND CONDITIONS OF USE (“Terms and Conditions”)
          CAREFULLY BEFORE USING THIS SITE
        </h5>
        <br />
        <h3>Introduction</h3>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          This site belongs to ZOSTEL LIMITED. By using, accessing, viewing,
          transmitting, caching, storing or otherwise utilizing any of the
          services, contents, or functions of this site, you signify your
          consent to these terms and conditions as set forth herein.
          <br /> The terms and conditions set out below apply to your use of
          this web site and related web sites (“Site”), including the use of the
          information services offered on the Site. In accessing and using the
          Site, you agree to be bound by these Conditions so please carefully
          read this section before proceeding. <br />
          If you do not agree to these terms of use, you must refrain from using
          the Site. We reserve the right, at our discretion, to change, modify,
          add, or remove portions of these terms at any time. Please check these
          terms periodically for changes. All changes will become effective
          immediately unless otherwise stated and you should check these terms
          for changes from time to time.
        </h5>
        <br />
        <h3>1. Use of Website</h3>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          The site is available only to individuals and entities that can form
          legally binding contracts under applicable law. The Site and the
          materials located on or through the Site are provided by us for
          informational purposes only, with the understanding that we are by the
          provision of these materials not engaged in the rendering of legal or
          other professional advice or service. <br />
          Commercial use of this site is strictly prohibited unless you obtain
          prior written consent from ZOSTEL LIMITED. You may only use this site
          to connect with other users over audio, make legitimate reservations
          or purchases. You are responsible for maintaining the secrecy of your
          passwords, login and account information. You will be financially
          accountable for all uses of the site by you and anyone using your
          password and login information. In addition, We may also suspend or
          discontinue any aspect of the Site at any time without being liable
          for any direct or indirect loss as a result of such action.
        </h5>
        <br />
        <h3>2. Termination</h3> <br />
        <h5 style={{ color: "#ffffff" }}>
          These terms are effective until terminated by either party. You may
          terminate these terms at any time by discontinuing use of the Site and
          destroying all materials obtained from any and all such sites and all
          related documentation and all copies and installations thereof,
          whether made under the terms of this Agreement or otherwise.
          Notwithstanding the termination of this Agreement, you acknowledge and
          agree that those rights and obligations which by their nature are
          intended to survive the termination of this Agreement in order to be
          fully operative, shall survive the termination of this Agreement
          including, without limitation, the provisions hereof:
          <br /> (i) Restrictions on Use of Materials;
          <br /> (ii) Submissions;
          <br /> (iii) Disclaimers;
          <br />
          (iv) Indemnification; <br />
          (v) Limitations of Liability; and
          <br /> (xi) Governing Laws & Jurisdiction.{" "}
        </h5>
        <br />
        <h3>3. Communication</h3>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          {" "}
          By continuing to use our services you agree and consent to receive all
          communications at the mobile number or email provided, even if the
          mobile number is registered under DND/NCPR list under TRAI
          regulations.{" "}
        </h5>
        <br />
        <h3>4. General</h3>
        <br />
        <h5 style={{ color: "#ffffff" }}>
          {" "}
          These Terms and Conditions together with ZOSTEL LIMITED’s Privacy
          Policy, constitute the entire agreement between the parties relating
          to the use of this Site. ZOSTEL LIMITED may revise these terms and
          conditions at any time by updating the positing and such changes shall
          be effective immediately unless otherwise indicated. No agency,
          partnership, joint-venture, franchisee-franchisor, or
          employee-employer relationship is created by these Terms and
          Conditions or the use of the Site.
        </h5>
        <br/>
        <h5 style={{ color: "#ffffff" }}> No certificate under section 80G of the Income Tax Act, 1961 will be issued to Guests.</h5><br/>
        <h5 style={{ color: "#ffffff" }}>This initiative will also be extended to guests, who are booking themselves directly and who would be requested to contribute Rs.5/- towards the
        cause. However, this will be restricted to guest contribution only and is optional. Guests will be charged additional Rs.5/- only when they agree to participate.</h5>
      </div>
      </div>
    </div>
    <UserFooter/>
    </div>
  );
}
