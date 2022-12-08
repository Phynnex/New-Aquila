import React, { useState } from "react";
import InputForm from "./InputForm";
import Button from "./Button";
import "./newcss.css";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";
// import { signupInput } from './data'
import Logo from "../../assets/DashboardLogo.png";

const Signupnew = ({ signup, isAuthenticated }) => {
  const [isLoading, setisLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const { username, company, email, password, confirmPassword } = formData;

  // const [values, setValues] = useState({
  //     username : '',
  //     email : '',

  //     companyName : '',
  //     password : '',
  //     confirmPassword : ''

  //   })

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Submit')
  // }

  const handleSubmit = (e) => {
    // setisLoading(true)
    e.preventDefault();
    if (password === confirmPassword) {
        signup(username, company, email, password, confirmPassword )
        .then (() => { setAccountCreated(true)})
    }
   
  };

  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }
  if (accountCreated) {
    return <Redirect to="/" />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, 'input')
  // const onChange = (e) => {
  //     setValues({ ...values, [e.target.name] : e.target.value })
  // }

  const signupInput = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "User name should be More than 4 characters",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email is not Valid",
      required: true,
    },

    {
      id: 4,
      name: "company",
      type: "text",
      placeholder: "Company Name",
      pattern: "^[A-Za-z0-9]{4,16}$",
      errorMessage: "Company name should be More than 4 characters",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: null,
      errorMessage: "Password should contain numbers and symbols",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Comfirm Password",
      pattern: formData.password,
      errorMessage: "Passoword do not match",
      required: true,
    },
  ];

  return (
    <div className="sign-in-body">
      <div className="sign-section">
        <div className="form-div">
          <img src={Logo} alt="aquila" />
          <p>Join Us Today</p>
          <form onSubmit={handleSubmit}>
            {signupInput.map((input) => (
              <InputForm
                onChange={onChange}
                key={input.id}
                {...input}
                value={formData[input.name]}
              />
            ))}

            <Button text="Get Started Now" />
            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "#335AA3",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Already a User? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signupnew);
