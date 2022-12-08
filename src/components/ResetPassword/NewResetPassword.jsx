import React, { useState } from 'react'

import Button from '../SignUp/Button'
import '../SignUp/newcss.css'
import Logo from "../../assets/DashboardLogo.png";
import { Link } from 'react-router-dom';

const ResetPassword = () => {

  const [email, setEmail] = useState('')
 

 

  const handleSubmit =(e)=> {
    e.preventDefault();

  }

  return (
     
    <div className="login-section">
    <div className='form-div'>
        <img src={Logo} alt="aquila" />
        <p>Password Reset</p>
        <form className='login-form' onSubmit={handleSubmit}>
            <input type='email' value={email} placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />

            <Button text='Reset Password' />
            <Link to="/login" style={{fontSize:'16px', textAlign:'center', color:'#335AA3', fontWeight:'600', cursor:'pointer', textDecoration:'none'}}>Go back to Login</Link>
        </form>
    </div>

   
</div>
    
  )
}

export default ResetPassword