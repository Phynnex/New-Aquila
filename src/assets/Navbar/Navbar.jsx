import React, { useState } from "react"

import { Link } from "react-router-dom"
// import "./Navbar.css"
import Dropdown from "./Dropdown"
import { Button } from "./Button"
import Logo from "../../assets/logo.png"

import { MenuIcon, NavbarAppLogoLink, NavbarMain, NavItemLinksContainer, NavItemsContainer } from "./style"
import { AppLink } from "globalStyles/style"

const Navbar = () => {
	const [click, setClick] = useState(false)
	const [dropdown, setDropdown] = useState(false)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false)
		} else {
			setDropdown(true)
		}
	}

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false)
		} else {
			setDropdown(false)
		}
	}

	return (
		<NavbarMain>
			<NavbarAppLogoLink to="/" onClick={closeMobileMenu}>
				<img src={Logo} alt="logo" />
			</NavbarAppLogoLink>
			<NavItemsContainer>
				<NavItemLinksContainer>
					<li className="nav-item">
						<AppLink to="/" className="nav-links" onClick={closeMobileMenu}>
							About
						</AppLink>
					</li>
					<li className="dropdown-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<AppLink to="/how-it-works" className="nav-links" onClick={closeMobileMenu}>
							How It Works <i className="fas fa-caret-down" />
						</AppLink>
						{dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<AppLink to="/pricing" className="nav-links" onClick={closeMobileMenu}>
							Pricing
						</AppLink>
					</li>
					<li className="nav-item">
						<AppLink to="/support" className="nav-links" onClick={closeMobileMenu}>
							Support
						</AppLink>
					</li>
					<li className="nav-item">
						<AppLink to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
							Contact Us
						</AppLink>
					</li>
					{/* <li>
						<Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
							Login
						</Link>
					</li> */}
				</NavItemLinksContainer>
				<Button />
				<MenuIcon onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</MenuIcon>
			</NavItemsContainer>
		</NavbarMain>
	)
}

export default Navbar
