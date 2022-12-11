import React from "react";
import styled from "styled-components";
import DLogo from "../assets/DashboardLogo.png" 
import App from "../assets/app.png"
import Notifications from "../assets/notification.png"
import Down from "../assets/down2.png"
import Profile from "../assets/profile.png"
import { Link } from 'react-router-dom';



export default function DashboardNav() {
 
  return (
    <Nav >
      <div className="title">
        <img src={DLogo} alt='dashboard-logo'/>
      </div>
      <div className="search">
        <Link to="/first-login">
          <img src={App} alt='app'/>
        </Link>
        <img src={Notifications} alt='bell'/>
        <img src={Profile} alt='profile-pic'/>
        
        <p >William</p>
       
        <img src={Down} alt='down-arrow'/>
      </div>
    </Nav>
  );
}


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5B5B5B;
  background: #FFFFFF;
  font-weight:700;
  box-shadow: 0px 2px 4px 0px #00000040;
  padding: 0 2rem;
 
  .search {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: .5rem 2rem .5rem 0rem;
  }
  
`;