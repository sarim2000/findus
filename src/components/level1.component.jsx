import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import level1 from "../assets/level1.jpg";
import level2 from "../assets/level2.webp";
import level3 from "../assets/level3.jpeg";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import CoordinatesContext from "../useContext/coordinates.context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Level1() {
	let { levelno } = useParams();
	const notify = () =>
		toast.success("Correct!", {
			position: "top-right",
			autoClose: 3002,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	const coordinates = useContext(CoordinatesContext);
	const x1 = coordinates.level1.x;
	const y1 = coordinates.level1.y;

	const maxX1 = coordinates.level1.maxX;
	const maxY1 = coordinates.level1.maxY;
	const [toggle, settoggle] = useState(false);
	const [searchBoxPosition, setSearchBoxPosition] = useState({
		left: -1000,
		top: -1000,
	});
	const [dropBoxPosition, setdropBoxPosition] = useState({
		left: -1000,
		top: -1000,
	});
	const placeBox = (e) => {
		const clickPosition = getClickPosition(e);
		setSearchBoxPosition({
			left: clickPosition.x - 20,
			top: clickPosition.y + 50,
		});
		setdropBoxPosition({
			left: clickPosition.x + 20,
			top: clickPosition.y,
		});

		console.log(clickPosition);
	};
	const getClickPosition = (e) => {
		const elementPosition = document
			.getElementById("picture")
			.getBoundingClientRect();
		return {
			x: e.clientX - elementPosition.x,
			y: e.clientY - elementPosition.y,
		};
	};
	const handleToggle = () => {
		if (
			searchBoxPosition.left + 20 >= x1 &&
			searchBoxPosition.left + 20 <= maxX1 &&
			searchBoxPosition.top - 50 >= y1 &&
			searchBoxPosition.top - 50 <= maxY1
		) {
			console.log("s");
			notify();
		}
	};

	return (
		<Container>
			<header className="levelHeader">
				<h1>Level {levelno}</h1>
			</header>

			<main className="levelImg">
				<div
					id="search-box"
					style={{ left: searchBoxPosition.left, top: searchBoxPosition.top }}
				></div>
				<div
					id="dp-box"
					style={{ left: dropBoxPosition.left, top: dropBoxPosition.top }}
				>
					<Button onClick={() => handleToggle()} variant="dark">
						Waldo?
					</Button>
				</div>
				{
					{
						1: (
							<img
								style={{ position: "relative" }}
								id="picture"
								onClick={(e) => placeBox(e)}
								className="image1"
								src={level1}
								alt="level1"
							/>
						),
						2: <img src={level2} alt="level2" />,
						3: <img src={level3} alt="level3" />,
					}[levelno]
				}
			</main>
		</Container>
	);
}
