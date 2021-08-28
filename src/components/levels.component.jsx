import { Container } from "react-bootstrap";
import { Overlay, Tooltip, Figure } from "react-bootstrap";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import waldo from "../assets/waldo.png";
import level1 from "../assets/level1.jpg";
import level2 from "../assets/level2.webp";
import level3 from "../assets/level3.jpeg";

export default function Levels() {
	const [show, setShow] = useState(false);
	const target = useRef(null);
	return (
		<Container>
			<header className="levelHeader">
				<h1>Levels</h1>
			</header>
			<section>
				<h2>Instructions</h2>
				<ul>
					<li>
						<h3>Select a level</h3>
					</li>
					<li>
						<h3>
							Click on the image spot where you think{" "}
							<span
								style={{ textDecoration: "underline", cursor: "pointer" }}
								ref={target}
								onClick={() => setShow(!show)}
							>
								Waldo
							</span>{" "}
							is.
						</h3>
					</li>
					<Overlay target={target.current} show={show} placement="right">
						{(props) => (
							<Tooltip id="overlay-example" {...props}>
								<img src={waldo} style={{ height: "10em" }} alt="" />
							</Tooltip>
						)}
					</Overlay>
					<li>
						<h3>Winning is based on who finds him the fastest</h3>
					</li>
					<li>
						<h3>
							What are you waiting for? Pick one and prove you got the{" "}
							<span
								style={{ textDecoration: "underline", cursor: "pointer" }}
								onClick={() =>
									window.open(
										"https://www.youtube.com/watch?v=btPJPFnesV4&ab_channel=SurvivorVEVO"
									)
								}
							>
								Eye of the Tiger
							</span>
						</h3>
					</li>
				</ul>
			</section>
			<section className="levelPhotos">
				<Figure>
					<Link to="/level/1">
						<Figure.Image width={471} height={680} alt="171x180" src={level1} />
						<Figure.Caption>Level 1</Figure.Caption>
					</Link>
				</Figure>
				<Figure>
					<Link to="/level/2">
						<Figure.Image width={471} height={680} alt="171x180" src={level2} />
						<Figure.Caption>Level 2</Figure.Caption>
					</Link>
				</Figure>
				<Figure>
					<Link to="/level/3">
						<Figure.Image width={471} height={680} alt="171x180" src={level3} />
						<Figure.Caption>Level 3</Figure.Caption>
					</Link>
				</Figure>
			</section>
		</Container>
	);
}
