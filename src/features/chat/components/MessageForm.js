import React from "react";
import PropTypes from "prop-types";
import { Row, Form, Button } from "react-bootstrap";

export default function MessageForm({
	onMessageSubmit,
	messageBody,
	sendMessage,
	isConnectionOpen,
}) {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Row>
			<Form
				onSubmit={handleSubmit}
				className="d-flex justify-content-center align-items-stretch"
			>
				<Form.Control
					type="text"
					required
					placeholder="Say something"
					value={messageBody}
					onChange={(e) => onMessageSubmit(e.target.value)}
				/>
				<Button
					type="submit"
					variant="primary"
					className="p-3"
					style={{ width: "20%" }}
					onClick={sendMessage}
					disabled={!isConnectionOpen}
				>
					Send
				</Button>
			</Form>
		</Row>
	);
}

MessageForm.propTypes = {
	onMessageSubmit: PropTypes.func.isRequired,
	sendMessage: PropTypes.func.isRequired,
	isConnectionOpen: PropTypes.bool.isRequired,
	messageBody: PropTypes.string.isRequired,
};
