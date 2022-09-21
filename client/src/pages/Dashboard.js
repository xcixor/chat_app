import React from "react";
import PropTypes from "prop-types";

export default function Dashboard({ id }) {
	return <div data-testid="set-id">{id}</div>;
}

Dashboard.propTypes = {
	id: PropTypes.string.isRequired,
};
