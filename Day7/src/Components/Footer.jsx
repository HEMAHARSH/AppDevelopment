import React from 'react'
import "../Components/UserFooter.css"
import { useNavigate } from 'react-router-dom';
function Footer() {
    const nav=useNavigate("");
    const tc=()=>{
    nav("/terms")
  }
  const pp=()=>{
    nav("/privacy")
  }
  return (
    <div id="adfooter"><section className='small1'>
<span className='line2' style={{cursor:'pointer'}} onClick={pp}>Privacy Policy</span>
<div className='line1'></div>
<span className='line2' onClick={tc}> Terms & Conditions</span>

<div className='line1'></div>
© 2023 ABC Corporation
</section></div>
  )
}

export default Footer