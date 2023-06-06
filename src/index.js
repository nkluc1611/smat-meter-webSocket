const WebsocketServer = require('./modules/websocket-server')
const WebSocketServerController = require('./controllers/websocket-server')

// Declare port websocket
const port = 8083
// New Web Socket Server
const websocket = new WebsocketServer(port)
const wssControler = new WebSocketServerController(websocket.wss)
wssControler.onConnection()