import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Row, Form, Button } from "react-bootstrap";

export default function MessageForm({ onMessageSubmit }) {
	const messageRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		onMessageSubmit(messageRef.current.value);
	};
	return (
		<Row>
			<Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-stretch">
				<Form.Control
					type="text"
					ref={messageRef}
					required
					placeholder="Say something"
				/>
				<Button type="submit" variant="primary" className="p-3" style={{ width:"20%" }}>
					Send
				</Button>
			</Form>
		</Row>
	);
}

MessageForm.propTypes = {
	onMessageSubmit: PropTypes.func.isRequired,
};
