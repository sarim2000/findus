import "./App.css";
import NavBar from "./components/Navbar.component";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		</div>
	);
}

export default App;
