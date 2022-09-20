import React from "react";
import "../public/style.css";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

function Test() {
	return <h1>Hello World!</h1>;
}

root.render(
	<React.StrictMode>
			<Test />
	</React.StrictMode>
);