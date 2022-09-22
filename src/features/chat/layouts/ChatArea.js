import React from "react";
import PropTypes from "prop-types";
import { Row, Container } from "react-bootstrap";
import Message from "../components/Message";

export default function ChatArea({ currentUser, messages }) {
	return (
		<Container style={{ backgroundColor: "#F0F0F0", height: "80%" }}>
			{messages
				? messages.map((message, index) => (
						<Row key={index}>
							<Message
								message={message.message}
								isMe={currentUser === message.sender ? true : false}
								sender={message.sender}
							/>
						</Row>
				  ))
				: ""}
		</Container>
	);
}

ChatArea.propTypes = {
	messages: PropTypes.array,
	currentUser: PropTypes.string,
};