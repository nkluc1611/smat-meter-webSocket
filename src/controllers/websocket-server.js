class WebSocketServerController{
    constructor(wss){
        this.wss = wss
    }

    // Handle on connection websocket
    onConnection(){
        this.wss.on("connection", ws => {
            console.log("new client connected");
        
            // Connected
            ws.send('Connected!');

            // Publish message
            this.publish(ws)
        
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

    publish(ws){
        // On message from client
        ws.on("message", data => {
            console.log(`${data}`)
            this.wss.clients.forEach(client => {
                client.send(`${data}`)
            });
        });
    }
}

module.exports = WebSocketServerController