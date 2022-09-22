/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import { ChatArea, MessageForm } from "../features";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Dashboard({ id }) {
	const [messages, setMessages] = useLocalStorage("messages", []);
	const [isConnectionOpen, setConnectionOpen] = useState(false);
	const [messageBody, setMessageBody] = useState("");
	const wss = useRef();
	const sendMessage = () => {
		if (messageBody) {
			console.log(messageBody);
			wss.current.send(
				JSON.stringify({
					sender: id,
					body: messageBody,
				})
			);
			setMessageBody("");
		}
	};
	useEffect(() => {
		wss.current = new WebSocket("ws://localhost:9500");
		wss.current.onopen = () => {
			console.log("Connection opened");
			setConnectionOpen(true);
		};
		wss.current.onmessage = (event) => {
			const data = JSON.parse(event.data);
			console.log(data, "data");
			setMessages((_messages) => [..._messages, data]);
		};
		return () => {
			console.log("Closing...");
			wss.current.close();
		};
	}, []);
	const scrollTarget = useRef(null);

	useEffect(() => {
		if (scrollTarget.current) {
			const offsetBottom =
				scrollTarget.current.offsetTop + scrollTarget.current.offsetHeight;
			window.scrollTo({ top: offsetBottom });
		}
	}, [messages]);
	return (
		<Container
			style={{ height: "calc(100% - 60px)", paddingBottom:"65px" }}
			data-testid="chat-room"
			ref={scrollTarget}
		>
			<ChatArea messages={messages} currentUser={id} />
			<Row
				style={{
					position: "fixed",
					bottom: "0",
					height: "60px",
					width: "100%",
				}}
			>
				<MessageForm
					onMessageSubmit={setMessageBody}
					messageBody={messageBody}
					sendMessage={sendMessage}
					isConnectionOpen={isConnectionOpen}
				/>
			</Row>
		</Container>
	);
}

Dashboard.propTypes = {
	id: PropTypes.string.isRequired,
};
