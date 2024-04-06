//websockets using ws library.

//native http library
//import http from "http";
import WebSocket, { WebSocketServer } from "ws";

import express from "express";

// const server = http.createServer(function (request: any, response: any) {
//   console.log(new Date() + " Received request for " + request.url);
//   response.end("sagnik here");
// });
const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

// wss.on("connection", function connection(ws) {
//   ws.on("error", console.error);

//   ws.on("message", function message(data, isBinary) {
//     // for every client that is currently connected to the
//     // websocket server , if the socket connection is to open to them
//     // and then send the  data
//     //broadcast to every client.
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });

//   ws.send("Hello! Message From Server!!");
// });

// server.listen(8080, function () {
//   console.log(new Date() + " Server is listening on port 8080");
// });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send("Hello! Message From Server!!");
});
