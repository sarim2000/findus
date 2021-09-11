import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router";
import { useState } from "react";

export default function NavBar() {
	// eslint-disable-next-line no-unused-vars
	const [error, seterror] = useState();
	const { currentUser, logout } = useAuth();

	const history = useHistory();
	async function handleLogout() {
		seterror("");
		try {
			await logout();
			history.push("/signin");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Navbar bg="info" variant="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">findUs</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/levels">Levels</Nav.Link>
						<Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
					</Nav>

					{currentUser && (
						<Nav>
							<Nav.Link href="/">Welcome, {currentUser.email}</Nav.Link>
							<Button variant="outline-danger" onClick={handleLogout}>
								Log out
							</Button>
						</Nav>
					)}

					{!currentUser && (
						<Nav>
							<Nav.Link href="/signup">Sign Up</Nav.Link>
							<Nav.Link eventKey={2} href="/signin">
								Sign In
							</Nav.Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
