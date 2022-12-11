import React, { useState } from "react"
import { MenuItems } from "./MenuItems"
// import './Navbar.css';
import { Link } from "react-router-dom"

import styled from "styled-components/macro"

const DropDownMenu = styled.ul`
	width: 130px;
	/* position: absolute; */
	top: 30px;
	background: #1a303d;
	list-style: none;
	text-align: start;
	/* .clicked {
		display: none;
	} */
`
const DropdownItem = styled.li`
	padding: 10px 0px;
	margin: 15px 0px;
	cursor: pointer;
	:hover {
		background: #5cabff;
	}
`

function Dropdown() {
	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)

	return (
		<>
			<DropDownMenu onClick={handleClick} className={click ? "clicked" : "dropdown-menu"}>
				{MenuItems.map((item, index) => {
					return (
						<DropdownItem key={index}>
							<Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
								{item.title}
							</Link>
						</DropdownItem>
					)
				})}
			</DropDownMenu>
		</>
	)
}

export default Dropdown
