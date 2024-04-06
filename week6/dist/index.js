"use strict";
//websockets using ws library.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//native http library
//import http from "http";
const ws_1 = __importStar(require("ws"));
const express_1 = __importDefault(require("express"));
// const server = http.createServer(function (request: any, response: any) {
//   console.log(new Date() + " Received request for " + request.url);
//   response.end("sagnik here");
// });
const app = (0, express_1.default)();
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
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
            if (client.readyState === ws_1.default.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    ws.send("Hello! Message From Server!!");
});
