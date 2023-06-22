const MultipathServer = require('ws-multipath');
const WebSocketServerController = require('./controllers/WebsocketServerController');

// Declare port
const port = 8083

// Create Web Socket Server listen port
const server = new MultipathServer({ port: port });

// Create sub path on Web Socket Srever
const rt_data_socket = new WebSocketServerController(server, '/realtime-data')
rt_data_socket.onConnection()

const eny_now_socket = new WebSocketServerController(server, '/energy')
eny_now_socket.onConnection()

const response_api_socket = new WebSocketServerController(server, '/api')
response_api_socket.onConnection()