/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import { ChatArea, MessageForm } from "../features";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Dashboard({ id, messages, setMessages }) {
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
	const scrollElement = useRef(null);

	useEffect(() => {
		if (scrollElement.current) {
			scrollElement.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages.length]);
	return (
		<Container
			style={{ height: "calc(100% - 100px)", paddingBottom: "250px" }}
			data-testid="chat-room"
		>
			<ChatArea messages={messages} currentUser={id} />
			<div
				style={{
					position: "fixed",
					bottom: "0",
					height: "60px",
					width: "100%",
					left: "0",
					right: "0",
				}}
			>
				<MessageForm
					onMessageSubmit={setMessageBody}
					messageBody={messageBody}
					sendMessage={sendMessage}
					isConnectionOpen={isConnectionOpen}
				/>
			</div>
			<div ref={scrollElement} />
		</Container>
	);
}

Dashboard.propTypes = {
	id: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired,
	setMessages: PropTypes.func.isRequired,
};
