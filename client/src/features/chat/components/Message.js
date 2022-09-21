import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

export default function Message({ isMe, message, sender }) {
	return (
		<Col
			md={isMe ? { span: 5, offset: 7 } : { span: 5 }}
			style={{
				backgroundColor: isMe ? "#E8E8E8" : "#A020F0",
				height: "auto",
			}}
			className="mb-2 p-2"
		>
			<h4>{isMe ? "Me" : sender}</h4>
			<p>{message}</p>
		</Col>
	);
}

Message.propTypes = {
	isMe: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	sender: PropTypes.string.isRequired,
};
