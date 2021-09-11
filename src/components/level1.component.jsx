import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import level1 from "../assets/level1.jpg";
import level2 from "../assets/level2.webp";
import level3 from "../assets/level3.jpeg";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import CoordinatesContext from "../useContext/coordinates.context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from "../context/AuthContext";

export default function Level1() {
	let { levelno } = useParams();
	const [initialTime, setinitialTime] = useState(0);
	const [finalTime, setfinalTime] = useState(0);
	const [Found, setFound] = useState(false);
	const { currentUser } = useAuth();

	function writeUserData(userId, onlevel, email, time_record) {
		const db = getDatabase();
		set(ref(db, "users/" + userId + onlevel), {
			email: email,
			level: onlevel,
			time: time_record,
			id: userId,
		});
	}
	useEffect(() => {
		async function currentTime() {
			var today = await new Date();
			var time = await (today.getMinutes() * 60 + today.getSeconds());
			await setinitialTime(time);
		}
		currentTime();
		setFound(false);
	}, []);
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
	const errorNotify = () =>
		toast.error("Nope!", {
			position: "top-right",
			autoClose: 1900,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	const coordinates = useContext(CoordinatesContext);

	const [searchBoxPosition, setSearchBoxPosition] = useState({
		left: -1000,
		top: -1000,
	});
	const [dropBoxPosition, setdropBoxPosition] = useState({
		left: -1000,
		top: -1000,
	});
	const [waldoPosition, setwaldoPosition] = useState({
		x: -1000,
		y: -1000,
	});

	const placeBox = async (e) => {
		const clickPosition = await getClickPosition(e);
		await setSearchBoxPosition({
			left: clickPosition.x - 20,
			top: clickPosition.y + 50,
		});

		await setwaldoPosition({
			x: clickPosition.x / clickPosition.width,
			y: clickPosition.y / clickPosition.height,
		});

		await setdropBoxPosition({
			left: clickPosition.x + 20,
			top: clickPosition.y,
		});
	};

	const getClickPosition = async (e) => {
		const elementPosition = document
			.getElementById("picture")
			.getBoundingClientRect();

		return {
			x: e.clientX - elementPosition.x,
			y: e.clientY - elementPosition.y,
			width: elementPosition.width,
			height: elementPosition.height,
		};
	};

	const handleToggle = async () => {
		switch (levelno) {
			case "1":
				if (
					Math.abs(waldoPosition.x - coordinates.level1.x) <= 0.06 &&
					Math.abs(waldoPosition.y) <= 0.27 &&
					waldoPosition.y >= 0.19
				) {
					var today = await new Date();
					var time = await (today.getMinutes() * 60 + today.getSeconds());
					await setfinalTime(time - initialTime);
					setFound(true);
					notify();

					await writeUserData(
						currentUser.uid,
						levelno,
						currentUser.email,
						time - initialTime
					);
				} else {
					errorNotify();
				}
				break;
			case "2":
				if (
					Math.abs(waldoPosition.x - coordinates.level2.x) <= 0.06 &&
					Math.abs(waldoPosition.y) <= 0.7055555429968814 &&
					Math.abs(waldoPosition.y) >= 0.6479423742726016
				) {
					var today = await new Date();
					var time = await (today.getMinutes() * 60 + today.getSeconds());
					await setfinalTime(time - initialTime);
					setFound(true);
					notify();

					await writeUserData(
						currentUser.uid,
						levelno,
						currentUser.email,
						time - initialTime
					);
				} else {
					errorNotify();
				}
				break;
			case "3":
				if (
					Math.abs(waldoPosition.x - coordinates.level3.x) <= 0.01 &&
					Math.abs(waldoPosition.y - coordinates.level3.y) <= 0.01
				) {
					var today = await new Date();
					var time = await (today.getMinutes() * 60 + today.getSeconds());
					await setfinalTime(time - initialTime);
					setFound(true);
					notify();

					await writeUserData(
						currentUser.uid,
						levelno,
						currentUser.email,
						time - initialTime
					);
				} else {
					errorNotify();
				}
				break;
			default:
				break;
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
					{Found && <Redirect to="/leaderboard" />}
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
						2: (
							<img
								style={{ position: "relative" }}
								id="picture"
								onClick={(e) => placeBox(e)}
								src={level2}
								alt="level2"
							/>
						),
						3: (
							<img
								src={level3}
								style={{ position: "relative" }}
								id="picture"
								onClick={(e) => placeBox(e)}
								className="image1"
								alt="level3"
							/>
						),
					}[levelno]
				}
			</main>
		</Container>
	);
}
