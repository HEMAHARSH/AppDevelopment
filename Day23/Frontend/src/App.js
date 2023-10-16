
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Billing from './Pages/Billing';
import UserPrivacyPolicy from './Pages/UserPrivacyPolicy';
import UserTerms from './Pages/UserTerms';
import Faq from './Pages/Faq';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Feedback from './Pages/Feedback';
import PaymentStatus from './Pages/PaymentStatus';
import BillingStatus from './Pages/BillingStatus';
import ContactusList from './Pages/Contactuslist';
import Feedbacklist from './Pages/Feedbacklist';


function App() {
  return (
    <div  >
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} ></Route>
    <Route path="/signup" element={<Signup/>} ></Route>
    <Route path="/dashboard" element={<Dashboard/>} ></Route>
    <Route path="/privacy" element={<PrivacyPolicy/>} ></Route>
    <Route path="/terms" element={<Terms/>} ></Route>
    <Route path="/uprivacy" element={<UserPrivacyPolicy/>} ></Route>
    <Route path="/uterms" element={<UserTerms/>} ></Route>
    <Route path="/home" element={<Home/>} ></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/bill" element={<Billing/>}></Route>
    <Route path="/billstatus" element={<BillingStatus/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/contactus" element={<ContactUs/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/paymentstatus" element={<PaymentStatus/>}></Route>
    <Route path="/querylist" element={<ContactusList/>}></Route>
    <Route path="/feedbacklist" element={<Feedbacklist/>}></Route>
    </Routes></BrowserRouter>
    </div>
    );
  }
  
  export default App;
  //<Signup/>
