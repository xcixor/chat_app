import React from "react";
import { render } from "@testing-library/react";
import MessageForm from "../MessageForm";

function renderMessageForm(args) {
	let defaultProps = {
		onMessageSubmit: () => {},
	};
	const props = { ...defaultProps, ...args };
	return render(<MessageForm {...props} />);
}

describe("MessageForm", () => {
	it("should render a message input", () => {
		const { getByPlaceholderText } = renderMessageForm();
		getByPlaceholderText("Say something");
	});

	it("should render save button", () => {
		const { getByText } = renderMessageForm();
		getByText("Send");
	});
});
