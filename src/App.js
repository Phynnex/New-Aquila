import React from "react"

import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HowItWorks from "./pages/HowItWorks"
// import Login from "./components/Login/Login"
import NewLogin from "./components/Login/NewLogin"
import ContactUs from "./pages/ContactUs"
// import SignUp from './components/SignUp/SignUp';
import Signupnew from './components/SignUp/Signupnew';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
// import ResetPassword from './components/ResetPassword/ResetPassword'
import NewResetPassword from './components/ResetPassword/NewResetPassword'
import Support from './pages/Support';
import Pricing from './pages/Pricing';
import Dashboard from './pages/dashboard'
import { DASHBOARDHOME } from './pages/dashboard/ROUTESCONTS';
import FirstLogin from './components/FirstLogin/FirstLogin';
import Activate from './components/Activate';

import { Provider } from "react-redux";

import store from "./redux/store";
function App() {
	return (
		<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/how-it-works" component={HowItWorks} />
				<Route path="/pricing" component={Pricing} />
				<Route path="/support" component={Support} />
				<Route path="/contact-us" component={ContactUs} />
				{/* <Route path="/login" component={Login} /> */}
				<Route path="/login" component={NewLogin} />
				{/* <Route path="/sign-up" component={SignUp} /> */}
				<Route path="/sign-up" component={Signupnew} />
				<Route path="/forgot-password" component={ForgotPassword} />
				{/* <Route path="/reset-password" component={ResetPassword} /> */}
				<Route path="/reset-password" component={NewResetPassword} />
				<Route exact path='/verify' component={Activate} />
				<Route path="/first-login" component={FirstLogin} />
				<Route path={DASHBOARDHOME} component={Dashboard} />


			</Switch>
		</Router>
		</Provider>
	)
}

export default App;