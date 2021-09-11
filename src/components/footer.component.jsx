import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import githubmarklight from "../assets/githubmarklight.png";

export default function Footer() {
	return (
		<Navbar
			style={{ position: "fixed", bottom: "0px", width: "100vw" }}
			bg="dark"
			mt={4}
			variant="light"
			expand="lg"
		>
			{" "}
			<Nav.Item>
				<Nav.Link href="https://github.com/sarim2000">
					<img src={githubmarklight} style={{ width: "36px" }} alt="" />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Link</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav.Item>
		</Navbar>
	);
}
