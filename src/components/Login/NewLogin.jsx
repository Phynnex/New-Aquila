import React, { useState } from "react";
import axios from "axios";
// import { BiShow, BiHide } from 'react-icons/bi'
// import Button from "../SignUp/Button";
import "../SignUp/newcss.css";
import Logo from "../../assets/DashboardLogo.png";
import { Link, Redirect } from "react-router-dom";
import  Backdrop  from '@mui/material/Backdrop';
import  CircularProgress  from '@mui/material/CircularProgress';
import { Button } from "globalStyles/style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [isLoading, setisLoading] = useState(false);


  // const [show, setShow] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    const { data } = await axios.post("http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/token/", {
      email, password
    });
    localStorage.setItem('user', JSON.stringify(data));
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

    setNavigate(true);
  };
  if (navigate) {
    
    return <Redirect to="/first-login" />;
  }

  // const handleShowPassword = () => {
  //   setShow(!show);

  // }
  return (
    <div className="login-body">
      <div className="login-section">
        <div className="form-div">
          <img src={Logo} alt="aquila" />
          <p>Welcome Back</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="passInput"
              required
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            {/* <span onClick={handleShowPassword} className='passIcon'>{ show ? <BiHide /> : <BiShow />}</span> */}
            <Link
              to="/reset-password"
              style={{
                fontSize: "16px",
                textAlign: "right",
                color: "#335AA3",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Forget Password?
            </Link>
            <Button
              mt="20px"
              w="100%"
              p="10px"
              bc="#5B5B5B"
              color="#EDEFF5"
              fs="18px"
              br="3px"
              mr="90px"
              type="submit"
            >
              {isLoading ? (
                <Backdrop open>
                  <CircularProgress color="inherit" />
                </Backdrop>
              ) : (
                "Sign in to Aquila"
              )}
              
            </Button>
            {/* <Button text="Sign in to Aquila" /> */}
            <Link to="sign-up"
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "#335AA3",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration:"none"
              }}
            >
              New Here, Let's get you Started
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
