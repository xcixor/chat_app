/* eslint-disable react/display-name */
import React from "react";
import { render } from "@testing-library/react";
import ChatArea from "../ChatArea";

const chatMessages = [
	{
		sender: "Test User",
		message: "Hi",
		sentAt: "5:49",
	},
];
const mockChildComponent = jest.fn();
jest.mock("../../components/Message", () => (props) => {
	mockChildComponent(props);
	return <mock-childComponent />;
});

afterEach(() => {
	jest.clearAllMocks();
});

test("If ChatArea is passed messages and currentUser, Message is called with props.", () => {
	render(<ChatArea messages={chatMessages} currentUser="Test User" />);
	expect(mockChildComponent).toHaveBeenCalledWith(
		expect.objectContaining({
			isMe: true,
			message: chatMessages[0],
		})
	);
});

test("If ChatArea is not passed messages, Message is not called", () => {
	render(<ChatArea messages={[]} />);
	expect(mockChildComponent).not.toHaveBeenCalled();
});
