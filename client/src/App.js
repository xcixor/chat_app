/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Login from "./features/auth/components/Login";
import useLocalStorage from "./features/auth/hooks/useLocalStorage"

function App() {
	const [name, setName] = useLocalStorage("id");
	return <Login onNameSubmit={setName} />;
}

export default App;
