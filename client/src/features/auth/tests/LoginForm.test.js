import React from "react";
import { render } from "@testing-library/react";
import Login from "../components/Login";

function renderLoginForm(args) {
	let defaultProps = {
		onNameSubmit: () => {},
	};

	const props = { ...defaultProps, ...args };
	return render(<Login {...props} />);
}

it("should render a label prompting name", () => {
	const { getByText } = renderLoginForm();
	getByText("Please Enter your Name");
});

it("should render a button to initiate chat", () => {
	const { getByText } = renderLoginForm();
	getByText("Start Chatting");
});

it("should render a button to create an id", () => {
	const { getByText } = renderLoginForm();
	getByText("Create an Id");
});