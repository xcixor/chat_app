/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./features";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./layouts/Navbar";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";

function App() {
	const [id, setId] = useLocalStorage("id");
	const [messages, setMessages] = useLocalStorage("messages", []);
	return id ? (
		<>
			<Navbar currentUser={id} />
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Dashboard
								id={id}
								messages={messages}
								setMessages={setMessages}
							/>
						}
					/>
					<Route
						exact
						path="/history"
						element={
							<History currentUser={id} items={messages} itemsPerPage={25} />
						}
					/>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</>
	) : (
		<Login onNameSubmit={setId} />
	);
}

export default App;
