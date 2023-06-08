const MultipathServer = require('ws-multipath');

class WebSocketServerController{
    constructor(server, path){
        this.wss = server.createHandler({ path: path })
        this.path = path
    }

    onConnection(){
        this.wss.on('connection', (ws) => {
            // Connected
            console.log(`Client ${this.path} connected`);
            ws.send('Connected!');

            // Disconnected
            ws.on("close", () => {
                console.log(`Client ${this.path} disconnected`);
            });

            // Error
            ws.onerror = function () {
                console.log("Some Error occurred")
            }

            // On message client
            this.publish(ws)

        })
    }

    publish(ws){
        // On message from client
        ws.on("message", data => {
            data = JSON.parse(data)
            console.log(`${this.path} : ${data}`)
            this.wss.clients.forEach(client => {
                client.send(`${data}`)
            });
        });
    }
}

module.exports = WebSocketServerController