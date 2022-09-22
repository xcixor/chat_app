/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Login } from "./features";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./layouts/Navbar";

function App() {
	const [id, setId] = useLocalStorage("id");
	return id ? (
		<>
			<Navbar currentUser={id} />
			<Dashboard id={id} />
		</>
	) : (
		<Login onNameSubmit={setId} />
	);
}

export default App;
