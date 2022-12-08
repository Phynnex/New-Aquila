import React, { useState } from "react";
import axios from "axios";
// import { BiShow, BiHide } from 'react-icons/bi'
import Button from "../SignUp/Button";
import "../SignUp/newcss.css";
import Logo from "../../assets/DashboardLogo.png";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  // const [show, setShow] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://aquiladev.azurewebsites.net/api/token/', {
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

            <Button text="Sign in to Aquila" />
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
