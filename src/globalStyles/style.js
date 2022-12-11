import { Link } from "react-router-dom"
import styled from "styled-components"

export const AppLink = styled(Link)`
	text-decoration: none;
	color: ${({ color }) => (color ? color : "#FFF")};
	font-weight: ${({ fw }) => (fw ? fw : null)};
	font-size: ${({ fs }) => (fs ? fs : null)};
	cursor: ${({ cursor }) => (cursor ? cursor : null)};
`

export const Button = styled.button`
	background-color: ${({ bc }) => (bc ? bc : null)};
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	flex: ${({ fg }) => (fg ? fg : null)};
	padding: ${({ p }) => (p ? p : null)};
	border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
	border-radius: ${({ br }) => (br ? br : null)};
	outline: none;
	font-weight: ${({ fw }) => (fw ? fw : null)};
	font-size: ${({ fs }) => (fs ? fs : null)};
	display: ${({ display }) => display};
	align-items: ${({ alignI }) => alignI || null};
	cursor: pointer;
	box-shadow: ${({ bs }) => (bs ? bs : null)};
	box-sizing: ${({ bSizing }) => (bSizing ? bSizing : null)};
	color: ${({ color }) => (color ? color : null)};
	margin: ${({ m }) => (m ? m : null)};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	margin-right: ${({ mr }) => (mr ? mr : null)};
	margin-bottom: ${({ mb }) => (mb ? mb : null)};
	border-bottom: ${({ bm }) => (bm ? bm : null)};
	&:hover {
		background: ${({ hv }) => (hv ? hv : null)};
		opacity:0.8;
	}
`

export const Input = styled.input`
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	font-weight: ${({ fw }) => (fw ? fw : null)};
	color: ${({ color }) => (color ? color : null)};
	background: ${({ bg }) => (bg ? bg : null)};
	display: ${({ display }) => display};
	margin: ${({ m }) => (m ? m : null)};
	outline: ${({ o }) => (o ? o : null)};
	border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
	border-radius: ${({ br }) => (br ? br : null)};
	outline: none;
	padding: ${({ p }) => (p ? p : null)};
	text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
	letter-spacing: ${({ tSpacing }) => (tSpacing ? tSpacing : null)};
`

export const Div = styled.div`
	width: ${({ width }) => (width ? width : null)};
	height: ${({ height }) => (height ? height : null)};
	margin: ${({ margin }) => (margin ? margin : null)};
	padding: ${({ padding }) => (padding ? padding : null)};
	display: ${({ display }) => display};
	align-items: ${({ alignI }) => alignI};
	flex: ${({ fg }) => (fg ? fg : null)};
	align-self: ${({ align }) => (align ? align : null)};
	margin: ${({ margin }) => (margin ? margin : null)};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	margin-right: ${({ mr }) => (mr ? mr : null)};
	margin-bottom: ${({ mb }) => (mb ? mb : null)};
	display: ${({ display }) => display || null};
	flex-direction: ${({ fd }) => fd || null};
	flex-wrap: ${({ wrap }) => wrap || null};
	justify-content: ${({ justify }) => (justify ? justify : null)};
	background-color: ${({ bc }) => (bc ? bc : null)};
	background-image: ${({ image }) => (image ? `url(${image})` : null)};
	box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : null)};
	box-sizing: ${({ boxSizing }) => (boxSizing ? boxSizing : null)};
	background-size: cover;
	cursor: ${({ cursor }) => (cursor ? cursor : null)};
	background-repeat: no-repeat;
	border: ${({ border }) => (border ? border : null)};
	border-radius: ${({ br }) => (br ? br : null)};
	top: ${({ top }) => (top ? top : null)};
	color: ${({ color }) => (color ? color : null)};
	position: ${({ position }) => (position ? position : null)};
`
export const P = styled.p`
	font-weight: ${({ fw }) => (fw ? fw : null)};
	line-height: ${({ lh }) => (lh ? lh : null)};
	color: ${({ color }) => (color ? color : null)};
	background: ${({ bg }) => (bg ? bg : null)};
	display: ${({ display }) => display};
	margin: ${({ m }) => (m ? m : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	margin-right: ${({ mr }) => (mr ? mr : null)};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	margin-bottom: ${({ mb }) => (mb ? mb : null)};
	text-transform: ${({ tr }) => (tr ? tr : null)};
	text-decoration: ${({ td }) => (td ? td : null)};
	font-size: ${({ fs }) => (fs ? fs : null)};
	padding: ${({ p }) => (p ? p : null)};
	text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
	cursor: ${({ cursor }) => (cursor ? cursor : null)};
	opacity: ${({ op }) => (op ? op : null)};
`
export const Img = styled.img`
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	margin: ${({ m }) => (m ? m : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	padding: ${({ p }) => (p ? p : null)};
	border-radius: ${({ br }) => (br ? br : null)};
	align-self: ${({ align }) => (align ? align : null)};
`