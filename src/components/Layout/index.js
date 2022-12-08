import Navbar from "components/Navbar/Navbar"
import styles from "./layout.module.css"
import Footer from './../Footer/Footer';


function Layout({ children }) {
	return (
		<div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
			<Navbar />
			<div className={styles.LayoutMain}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
