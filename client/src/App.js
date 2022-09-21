/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Login from "./features/auth/components/Login";
import useLocalStorage from "./features/auth/hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";

function App() {
	const [id, setId] = useLocalStorage("id");
	return id ? <Dashboard id={id} /> : <Login onNameSubmit={setId} />;
}

export default App;
