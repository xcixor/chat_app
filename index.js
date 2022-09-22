import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./public/style.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./src/App";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
