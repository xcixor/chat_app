/* eslint-disable no-unused-vars */
const WebSocket = require("ws");

const PORT = process.env.WSS_PORT || 9500;

const server = new WebSocket.Server(
	{
		port: PORT,
	},
	() => {
		console.log(`Server started at port ${PORT}`);
	}
);

const users = new Set();

function broadcastMessage(message) {
	users.forEach((user) => {
		user.ws.send(JSON.stringify(message));
	});
}

server.on("connection", (ws) => {
	const userRef = {
		ws,
	};
	users.add(userRef);

	ws.on("message", (message) => {
		console.log(message);
		try {
			const data = JSON.parse(message);
			if (typeof data.sender !== "string" || typeof data.body !== "string") {
				console.error("Invalid message");
				return;
			}
			var date = new Date();
			var timeString = `${date.getHours()}:${date.getMinutes()}`;
			const messageToSend = {
				sender: data.sender,
				message: data.body,
				sentAt: timeString,
			};
			broadcastMessage(messageToSend);
		} catch (e) {
			console.error("Error passing message!", e);
		}
	});
	ws.on("close", (code, reason) => {
		users.delete(userRef);
		console.log(`WSS closed: ${code} ${reason}!`);
	});
});
