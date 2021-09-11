import React from "react";
import { Table, Dropdown, DropdownButton, Form } from "react-bootstrap";

export default function Content({ db }) {
	let cnt = 1;
	return (
		<div>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Email</th>
						<th>Level No</th>
						<th>Time taken(in seconds)</th>
					</tr>
				</thead>
				<tbody>
					{db.map((id) => {
						return (
							<tr key={id.id}>
								<td>{cnt++}</td>
								<td>{id.email}</td>
								<td>{id.level}</td>
								<td>{id.time}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
