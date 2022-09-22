import React from "react";
import { render } from "@testing-library/react";
import Login from "../Login";

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

it("the create new id button is clickable", () => {
	const { getByText } = renderLoginForm();
	const createNewId = getByText("Create an Id");
	const spy = jest.spyOn(createNewId, "click");
	createNewId.click();
	expect(spy).toHaveBeenCalledTimes(1);
});

it("submit button fires props.onNameSubmit when clicked", () => {
	const { getByText } = renderLoginForm();
	const createNewId = getByText("Start Chatting");
	const spy = jest.spyOn(createNewId, "click");
	createNewId.click();
	expect(spy).toHaveBeenCalledTimes(1);
});
