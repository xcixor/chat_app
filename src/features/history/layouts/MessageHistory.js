import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import ChatArea from "../../chat/layouts/ChatArea";
import "./style.css";

export default function MessageHistory({ currentUser, items, itemsPerPage }) {
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		console.log(items);
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<>
			<ChatArea currentUser={currentUser} messages={currentItems} />
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				containerClassName={"pagination"}
				previousLinkClassName={"pagination__link"}
				nextLinkClassName={"pagination__link"}
				disabledClassName={"pagination__link--disabled"}
				activeClassName={"pagination__link--active"}
			/>
		</>
	);
}

MessageHistory.propTypes = {
	items: PropTypes.array.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	currentUser: PropTypes.string.isRequired,
};
