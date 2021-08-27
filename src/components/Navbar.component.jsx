import { Navbar, Container, Nav } from "react-bootstrap";
import { Home } from "@styled-icons/fa-solid/Home";
import { Opslevel } from "@styled-icons/simple-icons/Opslevel";
import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<Navbar bg="info" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/home">findUs</Navbar.Brand>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>Levels</Nav.Link>
						<Nav.Link>Leaderboard</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Sign Up</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Sign In
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
