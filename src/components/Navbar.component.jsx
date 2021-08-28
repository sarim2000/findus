import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
	return (
		<Navbar bg="info" variant="light" expand="lg">
			<Container>
				<Navbar.Brand href="/home">findUs</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/levels">Levels</Nav.Link>
						<Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
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
