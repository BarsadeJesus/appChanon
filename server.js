const PORT = process.env.PORT || 3000;
const WebSocketServer = require("ws").Server; // here we are using WS library
const wss = new WebSocketServer({ port: `${PORT}` });

wss.on("connection", (ws) => {
  // Your code here ...
  console.log("Connection opened 🚀");
  ws.send("Chat connected 🚀");

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client != ws) client.send(message);
    });
  });

  ws.on("close", () => {
    console.log("Connection closed 💀");
  });
});