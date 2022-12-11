import React from "react"
import Logo from "assets/logo.png"
import Address from "assets/map-pin.png"
import Email from "assets/mail.png"
import Phone from "assets/phone.png"
import linkedIn from "assets/linkedin.png"
import twitter from "assets/twitter.png"
import facebook from "assets/facebook.png"
import instagram from "assets/instagram.png"
import youtube from "assets/youtube.png"
import "./Footer.css"

const Footer = () => {
	return (
		<div className={`sides footer`}>
			<div className="container">
				<div className="column">
					<p>
						<img src={Logo} alt="logo" />
					</p>
					<p className="column1-text">
						{" "}
						Aquila is an intelligent and comprehensive end-to-end mobile app security solution. Developers can quickly scan, monitor and protect any mobile app with in minutes.{" "}
					</p>
				</div>
				<div className="column column2">
					<p> CONNECT WITH US</p>

					<div className="column2-text">
						<p>SCAN</p>
						<p>MONITOR</p>
						<p>PROTECT</p>
						<p>TERMS AND CONDITION</p>
						<p>PRIVACY POLICY</p>
					</div>
				</div>
				<div className="column column3">
					<p> CONNECT WITH US</p>
					<ul>
						<li>
							<span>
								<img src={Address} alt="address" />
							</span>
							<span>2ND Floor Luzen Plaza, Igbo-efon, Lekki-epe Express Way, Lekki, Lagos, Nigeria</span>
						</li>
						<li>
							<span>
								<img src={Email} alt="email" />
							</span>
							<span>
								<a href="mailto:support@aquila.io">support@aquila.io</a>
							</span>
						</li>
						<li>
							<span>
								<img src={Phone} alt="telephone" />
							</span>
							<span>
								<a href="tel:+234-903-443-1566">+234-903-443-1566</a>
							</span>
						</li>
					</ul>
					<div className="footer-socials">
						<img src={linkedIn} alt="linkedIn" />
						<img src={facebook} alt="facebook" className="social-icons"/>
						<img src={twitter} alt="twitter" className="social-icons"/>
						<img src={instagram} alt="instagram" className="social-icons"/>
						<img src={youtube} alt="youtube" className="social-icons"/>
					</div>
				</div>
			</div>
			<div className="footer-line "></div>

			<div className="copyright-div">
				<p>COPYRIGHT 2022. ALL RIGHTS RESERVED AQUILA SECURITY</p>
			</div>
		</div>
	)
}

export default Footer
