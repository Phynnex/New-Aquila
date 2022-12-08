import React from "react"
import { HeroBtn, HeroContainer, HeroText, HeroTextContainer, HeroTitle, HomeContainer } from "./style"
import HeroImg from "assets/Home-bg-img.png"
import About from "./About/About"

function HomeComponent() {
	return (
		<HomeContainer>
			<HeroContainer>
				<HeroTextContainer>
					<HeroTitle>Mobile appliaction security for modern application development</HeroTitle>
					<HeroText>Aquila is an intelligent and comprehensive end-to-end mobile app security solution. Developers can quickly scan, monitor and protect any mobile app with in minutes. </HeroText>
					<HeroBtn>START A TRIAL</HeroBtn>
				</HeroTextContainer>
				<div className="hero-image-container">
					<img src={HeroImg} alt="hero" />
				</div>
			</HeroContainer>
			<About />
		</HomeContainer>
	)
}

export default HomeComponent
