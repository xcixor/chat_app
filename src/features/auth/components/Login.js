import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Container, Row, Form, Button } from "react-bootstrap";

export default function Login({ onNameSubmit }) {
	const idRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		onNameSubmit(idRef.current.value);
	};

	return (
		<Container
			style={{ height: "100vh" }}
			className="d-flex justify-content-center align-items-center"
		>
			<Row>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label style={{ fontWeight: "600" }}>
							Please Enter your Name
						</Form.Label>
						<Form.Control
							type="text"
							ref={idRef}
							required
							data-testid="name-input"
						/>
					</Form.Group>
					<Button type="submit" variant="primary" className="mt-3">
						Create an Id
					</Button>
				</Form>
			</Row>
		</Container>
	);
}

Login.propTypes = {
	onNameSubmit: PropTypes.func.isRequired,
};
