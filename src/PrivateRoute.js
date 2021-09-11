import React from "react";
import { Route, Redirect } from "react-router";
import { useAuth } from "./context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
	const currentUser = useAuth();
	return (
		<Route
			{...rest}
			render={(props) => {
				console.log(currentUser.currentUser);
				return currentUser.currentUser !== null ? (
					<Component {...props} />
				) : (
					<Redirect to="/signin" />
				);
			}}
		></Route>
	);
}
