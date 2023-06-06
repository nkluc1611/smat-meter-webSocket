// Require Websocket server from library
const WebSocketServer = require('ws');
class WebSocketServerModule{
	constructor(port){
		this.wss = new WebSocketServer.Server({port: port})
	}
}

module.exports = WebSocketServerModule