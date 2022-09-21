/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { ChatArea } from "../features";

const messages = [
	{
		sender: "User 1",
		id: "adbcd-3cert-rgt",
		message: "Hi",
	},
	{
		sender: "User 2",
		id: "adbcd-23ert-rgt",
		message: "Hello, how are you doing",
	},
	{
		sender: "User 1",
		id: "adbcd-3cert-rgt",
		message: "Im fine, thank you.",
	},
	{
		sender: "User 2",
		id: "adbcd-23ert-rgt",
		message: "Good to hear",
	},
	{
		sender: "User 3",
		id: "adbcd-3abvt-rgt",
		message: "Hi",
	},
];
export default function Dashboard({ id }) {
	return (
		<Container style={{ height: "100vh" }} data-testid="chat-room">
			<ChatArea messages={messages} currentUser={id} />
		</Container>
	);
}

Dashboard.propTypes = {
	id: PropTypes.string.isRequired,
};
