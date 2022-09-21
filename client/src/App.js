/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Login from "./features/auth/components/Login";

function App() {
	const [name, setName] = useState("id");
	return <Login onNameSubmit={setName} />;
}

export default App;
