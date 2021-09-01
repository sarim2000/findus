import "./App.css";
import NavBar from "./components/Navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Levels from "./components/levels.component";
import Level1 from "./components/level1.component";
import Home from "./components/homes.component";
import React from "react";
import CoordinatesContext from "./useContext/coordinates.context";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<ToastContainer />
				<Switch>
					<Route path="/levels" exact>
						<Levels />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<CoordinatesContext.Provider
						value={{
							level1: { x: 206, maxX: 232, y: 191, maxY: 236 },
						}}
					>
						<Route path="/level/:levelno" exact>
							<Level1 />
						</Route>
					</CoordinatesContext.Provider>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
