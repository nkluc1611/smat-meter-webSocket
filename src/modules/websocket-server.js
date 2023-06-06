// Require Websocket server from library
const WebSocketServer = require('ws');

function WebsocketServer(port) {
	// Initialize WebSocket Server
	const wss = new WebSocketServer.Server({port: port})
	wss.on("connection", ws => {
		console.log("new client connected");

		// Connected
		ws.send('Connected!');

		// On message from client
		ws.on("message", data => {
			console.log(`${data}`)
		});

		// Handling what to do when clients disconnects from server
		ws.on("close", () => {
			console.log("Disconnected");
		});
		// Handling client connection error
		ws.onerror = function () {
			console.log("Some Error occurred")
		}
	});
}

module.exports = {WebsocketServer}


