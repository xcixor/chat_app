import React from "react";
import PropTypes from "prop-types";
import { Nav, Container } from "react-bootstrap";

export default function Navbar({ currentUser }) {
	return (
		<Container className="py-2">
			<Nav className="align-items-center">
				{currentUser ? (
					<Nav.Item>
						<Nav.Link href="/" className="p-0">
							Hi {currentUser}
						</Nav.Link>
					</Nav.Item>
				) : (
					""
				)}
				<Nav.Item>
					<Nav.Link href="/history">View Chat History</Nav.Link>
				</Nav.Item>
			</Nav>
		</Container>
	);
}

Navbar.propTypes = {
	currentUser: PropTypes.string,
};
