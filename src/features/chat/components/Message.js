import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

export default function Message({ isMe, message }) {
	return (
		<Col
			md={isMe ? { span: 5, offset: 7 } : { span: 5 }}
			style={{
				backgroundColor: isMe ? "#E8E8E8" : "#A020F0",
				color: isMe ? "#606060" : "#fff",
				height: "auto",
			}}
			className="mb-2 p-2"
		>
			<h4>{isMe ? "Me" : message.sender}</h4>
			<p>{message.message}</p>
			<span style={{ fontSize: "0.8rem" }}>
				<i>{message.sentAt}</i>
			</span>
		</Col>
	);
}

Message.propTypes = {
	isMe: PropTypes.bool.isRequired,
	message: PropTypes.object.isRequired,
};
