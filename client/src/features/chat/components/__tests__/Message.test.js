import React from "react";
import { render } from "@testing-library/react";
import Message from "../Message";

function renderMessageComponent(args) {
	let defaultProps = {
		sender: "User 1",
		id: "adbcd-3cert-rgt",
		message: "Hi",
		isMe: false,
	};

	const props = { ...defaultProps, ...args };
	return render(<Message {...props} />);
}

describe("renders parts of the message", () => {
	it("should render sender name", () => {
		const { getByText } = renderMessageComponent();
		getByText("User 1");
	});
	it("should render the message", () => {
		const { getByText } = renderMessageComponent();
		getByText("Hi");
	});
	it("should sender as me if message belongs to user", () => {
		const { getByText } = renderMessageComponent({ isMe: true });
		getByText("Me");
	});
});
