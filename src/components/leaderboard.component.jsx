import { React, useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Form } from "react-bootstrap";
import {
	getDatabase,
	ref,
	onValue,
	orderByChild,
	query,
} from "firebase/database";
import firebase from "@firebase/app-compat";
import Content from "./content.component";
import { useAuth } from "../context/AuthContext";

const db = getDatabase();

export default function LeaderBoard() {
	const { currentUser } = useAuth();

	const [data, setdata] = useState([]);
	const [searchField, setsearchField] = useState(0);

	function comp(a, b) {}
	useEffect(() => {
		const infoLeaderboard = query(ref(db, "users/"), orderByChild("time"));

		onValue(infoLeaderboard, (snapshot) => {
			const newData = snapshot.val();
			let Data = [];
			for (let id in newData) {
				Data.push(newData[id]);
			}
			Data.sort((a, b) => {
				return a.time > b.time;
			});
			console.log(Data);

			setdata(Data);
		});
	}, []);

	function handleDropdownChange(e) {
		setsearchField(e.target.value);
	}
	const filteredData = data.filter((dat) => dat.level === searchField);
	return (
		<Container className="mt-4">
			<h1 className="text-center mb-4">Leaderboard</h1>
			<div className="mb-4 d-flex justify-content-center">
				<Form.Select
					aria-label="Default select example"
					onChange={handleDropdownChange}
					style={{ width: "25%" }}
				>
					<option>Choose level:</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</Form.Select>
			</div>

			<div>{<Content db={filteredData} />}</div>
		</Container>
	);
}
