import "./App.css";
import NavBar from "./components/Navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Levels from "./components/levels.component";
import Level1 from "./components/level1.component";
import Home from "./components/homes.component";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/levels" exact>
					<Levels />
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/level/:levelno" exact>
					<Level1 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
