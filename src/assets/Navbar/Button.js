import { AppLink } from "globalStyles/style"
import React from "react"
import styled from "styled-components/macro"
import media from "utils/media"

const NavButton = styled.button`
	display: flex;
	padding: 6px 18px;
	border-radius: 16px;
	outline: none;
	border: none;
	margin-left: 15px;
	font-size: 18px;
	color: #fff;
	cursor: pointer;
	background-color: #0171db;
	${media.mobile`
  display:none;
  `}
`

export function Button() {
	return (
		<AppLink to="/login">
			<NavButton>Login</NavButton>
		</AppLink>
	)
}
