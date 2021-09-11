import { React, useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
	const emailRef = useRef("");
	const passwordRef = useRef("");

	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>

					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required></Form.Control>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label className="mt-2">Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								required
							></Form.Control>
						</Form.Group>

						<Button disabled={loading} type="submit" className="w-100 mt-4">
							Log In
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Don't have an account, <Link to="/signup">sign up</Link>
			</div>
		</>
	);
}
