import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { MessageHistory } from "../features";

export default function History({ currentUser, items, itemsPerPage }) {
	return (
		<Container className="message-history-wrapper">
			<MessageHistory
				currentUser={currentUser}
				items={items}
				itemsPerPage={itemsPerPage}
			/>
		</Container>
	);
}

History.propTypes = {
	items: PropTypes.array.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	currentUser: PropTypes.string.isRequired,
};
