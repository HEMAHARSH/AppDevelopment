
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Signup from './Pages/Signup';
import Home from './Pages/Dashboard';
import Login from './Pages/Login';

function App() {
  return (
    <div  >
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} ></Route>
    <Route path="/signup" element={<Signup/>} ></Route>
    <Route path="/home" element={<Home/>} ></Route>
    </Routes></BrowserRouter>
    </div>
    );
  }
  
  export default App;
  //<Signup/>
