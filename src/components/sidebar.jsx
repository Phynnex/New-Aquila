import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import Dashboard from "../assets/sidebar-icon/dashboard.png"
import Scan from "../assets/sidebar-icon/scan.png"
import Monitor from "../assets/sidebar-icon/monitor.png"
import Protect from "../assets/sidebar-icon/protect.png"
import Settings from "../assets/sidebar-icon/settings.png"
import Logout from "../assets/sidebar-icon/logout.png"


export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            {/* <FaTaxi />
            <span>MY TAXI</span> */}
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="/dashboard">
                  <Icon src={Dashboard} alt='dashboard' />
                  <span> Dashboard</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="/dashboard/scan">
                <Icon src={Scan} alt='scan'/>

                  <span> Scan</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="/dashboard/monitor">
                <Icon src={Monitor} alt='monitor'/>

                  <span>Monitor</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="/dashboard/protect">
                <Icon src={Protect} alt='protect'/>

                  <span>Protect</span>
                </a>
              </li>
              <br />
              <br />
              <br />
              <br /> 
              <br /> 
              <br /> 
              
              
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="/dashboard/settings" >
                <Icon src={Settings} alt='settings'/>

                  <span> Settings</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="/">
                <Icon src={Logout} alt='logout'/>

                  <span> Log Out</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        {/* <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div> */}
      </Section>
      {/* <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="/dashboard/scan">
                <RiDashboard2Fill />
                <span> Scan</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="#">
                <FaAddressCard />
                <span> Payment Details</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">
                <GiTwirlCenter />
                <span> Learning Center</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <BsFillChatTextFill />
                <span> FAQs</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="#">
                <IoSettings />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNav> */}
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #fff;
  height: 100vh;
  width: 14vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border: 1px solid #000;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;

      ul {

        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        li {
          padding: 0.6rem 1.3rem;
          border-radius: 5px;
          
          &:hover {
            background: #001D5326;


            a {
              color: #5B5B5B;

            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #5B5B5B;
            
            
          }
          
        }
        .active {
          background: #001D5326;

          a {
            color: #5B5B5B;
          }
        }
      }
    }
  }

  .icons {
    color:#000;
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: #000;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

// const ResponsiveNav = styled.div`
//   position: fixed;
//   right: -10vw;
//   top: 0;
//   z-index: 10;
//   background-color: black;
//   height: 100vh;
//   width: ${({ state }) => (state ? "100%" : "0%")};
//   transition: 0.4s ease-in-out;
//   display: flex;
//   opacity: 0;
//   visibility: hidden;
//   padding: 1rem;
//   .responsive__links {
//     ul {
//       list-style-type: none;
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       margin-top: 3rem;
//       li {
//         padding: 0.6rem 1rem;
//         border-radius: 0.6rem;
//         &:hover {
//           background-color: #ffc107;
//           a {
//             color: black;
//           }
//         }
//         a {
//           text-decoration: none;
//           display: flex;
//           gap: 1rem;
//           color: white;
//         }
//       }
//       .active {
//         background-color: #ffc107;
//         a {
//           color: black;
//         }
//       }
//     }
//   }
// `

const Icon = styled.img`
  width: 16px;
  height: 16px;
`