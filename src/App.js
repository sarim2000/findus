import "./App.css";
import NavBar from "./components/Navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Levels from "./components/levels.component";
import Level1 from "./components/level1.component";
import React from "react";
import CoordinatesContext from "./useContext/coordinates.context";
import { ToastContainer } from "react-toastify";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import LeaderBoard from "./components/leaderboard.component";
import Footer from "./components/footer.component";

function App() {
	return (
		<Router>
			<AuthProvider>
				<NavBar />
				<ToastContainer />
				<Switch>
					<PrivateRoute path="/levels" exact component={Levels} />
					<Route path="/signin" exact>
						<Container
							className="d-flex align-items-center justify-content-center"
							style={{ minHeight: "60vh" }}
						>
							<div className="w-100" style={{ maxWidth: "400px" }}>
								<Login />
							</div>
						</Container>
					</Route>
					<Route path="/signup" exact>
						<Container
							className="d-flex align-items-center justify-content-center"
							style={{ minHeight: "60vh" }}
						>
							<div className="w-100" style={{ maxWidth: "400px" }}>
								<SignUp />
							</div>
						</Container>
					</Route>
					<PrivateRoute path="/" exact component={Levels} />
					<PrivateRoute path="/leaderboard" exact component={LeaderBoard} />

					<CoordinatesContext.Provider
						value={{
							level1: { x: 0.1239, y: 0.2222 },
							level2: { x: 0.4884, y: 0.6856 },
							level3: { x: 0.1525, y: 0.1463 },
						}}
					>
						<PrivateRoute path="/level/:levelno" exact component={Level1} />
					</CoordinatesContext.Provider>
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
