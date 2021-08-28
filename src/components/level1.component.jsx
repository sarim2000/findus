import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import level1 from "../assets/level1.jpg";
import level2 from "../assets/level2.webp";
import level3 from "../assets/level3.jpeg";

export default function Level1() {
	let { levelno } = useParams();
	let url = "level" + levelno;

	return (
		<Container>
			<header className="levelHeader">
				<h1>Level {levelno}</h1>
			</header>
			<main className="levelImg">
				{console.log(url)}
				{
					{
						1: <img src={level1} alt="level1" />,
						2: <img src={level2} alt="level2" />,
						3: <img src={level3} alt="level3" />,
					}[levelno]
				}
			</main>
		</Container>
	);
}
