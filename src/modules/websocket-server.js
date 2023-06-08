// Require Websocket server from library
const MultipathServer = require('ws-multipath')

class WebSocketServerModule{
	constructor(port){
		this.wss = new MultipathServer({port: port})
	}
}

module.exports = WebSocketServerModule