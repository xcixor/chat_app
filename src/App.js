/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./features";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./layouts/Navbar";
import History from "./pages/History";

function App() {
	const [id, setId] = useLocalStorage("id");
	const [itemsInLocalStorage, setItemsInLocalStorage] = useLocalStorage(
		"messages",
		[]
	);
	const items = [];
	return id ? (
		<>
			<Navbar currentUser={id} />
			<Routes>
				<Route path="/" element={<Dashboard id={id} />} />
				<Route
					path="/history"
					element={
						<History
							currentUser={id}
							items={itemsInLocalStorage}
							itemsPerPage={25}
						/>
					}
				/>
			</Routes>
		</>
	) : (
		<Login onNameSubmit={setId} />
	);
}

export default App;
