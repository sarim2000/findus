import "./App.css";
import NavBar from "./components/Navbar.component";

function App() {
	const onMouseCoor = (e) => {
		console.log(e.clientX);
	};

	return (
		<div onMouseDown={(e) => onMouseCoor(e)} className="App">
			<NavBar />
		</div>
	);
}

export default App;
