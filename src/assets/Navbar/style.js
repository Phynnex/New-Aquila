import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import media from "utils/media"

export const NavbarMain = styled.nav`
	background: #1a303d;
	width: calc(100% - 12rem);
	height: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	font-weight: bold;
	padding: 2rem 6rem;
	${media.mobile`
    
    width: calc(100% - 2rem);
	padding: 2rem 1rem;
    `}
`

export const NavbarAppLogoLink = styled(Link)`
	text-decoration: none;
`
export const NavItemsContainer = styled.div`
	display: flex;
	/* background: red; */
	align-items: center;
`
export const NavItemLinksContainer = styled.div`
	display: flex;
	li {
		font-size: 14px;
		letter-spacing: 0.06em;
		font-weight: 700;
		line-height: 20px;
		list-style-type: none;
		margin: 0px 20px;
		text-decoration: none;
		color: #ffffff;
	}
	.dropdown-item {
		position: relative;
	}
	${media.smallDesktopMinimum`
    display: none;
    `}
`

export const NavMenu = styled.div`
	display: grid;
	grid-template-columns: repeat(7, auto);
	grid-gap: 20px;
	list-style: none;
	text-align: center;
	justify-content: end;
	align-items: center;
	margin-left: 2rem;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.06em;
	color: #ffffff;
`

export const MenuIcon = styled.div`
	display: none;
	list-style: none;
	text-align: center;
	justify-content: end;
	align-items: center;
	/* margin-right: 2rem; */
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.06em;
	color: #ffffff;
	.fas {
		font-size: 30px;
	}
	.fa-times {
		font-size: 38px;
	}
	${media.mobile`
    display: flex;
    `}
`
