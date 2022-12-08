import styled from "styled-components"
import media from "utils/media"

export const HomeContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	flex-direction: column;
	
`
export const HeroContainer = styled.div`
	display: flex;
	width: 100%;
	// width: calc(100% - 12rem);
	justify-content: space-between;
	align-items: center;
	background: #1a303d;
	padding: 3rem 6rem;
	${media.tablet`
		
	`}
	${media.mobile`
    width: calc(100% - 4rem);
	padding: 2rem  2rem;
    flex-direction: column-reverse;
    .hero-image-container {
       width: 100%;
       display: flex;
       justify-content:center;
       margin-top:3rem;
       align-items: center;
       img {
           width: 80%;
       }
    }
    `}
`
export const HeroTextContainer = styled.div`
	width: 591px;
	${media.mobile`
    width: 100%;
    `}
`

export const HeroTitle = styled.p`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	letter-spacing: 0.06em;
	color: #0171db;
	${media.mobile`
    font-weight: 200;
    font-size: 20px;
	text-align:center;
    `}
`
export const HeroText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 0.06em;
	color: #ffffff;
	${media.mobile`
    font-weight: 200;
    font-size: 12px;
	text-align:center;
    `}
`
export const HeroBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 35px;
	gap: 10px;
	border: none;
	width: 188px;
	height: 40px;
	left: 117px;
	top: 370px;
	background: #0171db;
	border-radius: 20px;
	color: #fff;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	margin-top: 4rem;
	:hover {
		color: #0171db;
		background: #fff;
		border: none;
		cursor: pointer;
	}
	${media.mobile`
		margin: 4rem auto 0;
		
	`}
`

export const AboutDiv = styled.div`
	width: 100%;
	height: 150px;
	background: #fff;
	h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 20px;
		letter-spacing: 0.06em;
		color: #0171db;
		text-align: center;
	}
`