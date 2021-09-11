import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setcurrentUser] = useState();
	const [Loading, setLoading] = useState(true);
	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			setcurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};
	return (
		<AuthContext.Provider value={value}>
			{!Loading && children}
		</AuthContext.Provider>
	);
}
