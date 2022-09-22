import React from "react";
import PropTypes from "prop-types";
import { Nav, Container } from "react-bootstrap";

export default function Navbar({ currentUser }) {
	return (
		<Container className="py-2">
			<Nav className="justify-content-between align-items-center">
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
					<Nav.Link
						href="/history"
					>
						History
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href="/"
						target="_blank"
						className="p-2 btn btn-primary text-white"
					>
						Connect as New User
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Container>
	);
}

Navbar.propTypes = {
	currentUser: PropTypes.string,
};
