import { Navbar, Container, Nav } from "react-bootstrap";
import { Lock } from "@styled-icons/material";
export default function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<Lock />
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Leaderboard</Nav.Link>
				</Nav>
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a href="#login">Mark Otto</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
