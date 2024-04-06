- advanced backend using websockets.





- socket.io is not the core protocol that IETF created. socket.io clients are community made and is not well supported and all dependencies.
- polling causes a lot of database calls.
- queue where we are storing all the events are down, then we are screwed.
	- send data to a backup storage.
	- revert the transaction in db.
- using the ws library to make out websockets from scratch.
- the queue is implemented in a server that is running a rabbitmq / redis ->
	- a machine that runs protocol that allows users to push to a queue and pop to a queue.
- serverless websockets are not allowed ->
	- cloudflare workers are deployed using HTTP connections.
	- cloudflare workers can work as a client to that , but not as a server.
	- however it can go up and down , so not a good idea to even create a client.

- the first connection that the browser makes is an http request, later it gets upgraded to a websocket connection.
- ws library allow us to do very fine grained control over sending data with websockets.
- server can be connected from browser, react, mobile ,other backend app etc.
- to connect to a react app:
	- the browser talked to our react code using axios / fetch api to connect -> HTTP connection.
	- for websocket connections we can connect using the websocket api.

### for next.js :
- make sure it is a client component.
- if we dont make the specific component a client component, the next server will connect to the ws layer we dont want that.


### scaling web sockets:
- think first principles.
- scale them horizontally.
- if we have a million users:
	- HTTP servers required to support -> not 1 million are sending requests together. not a lot servers required.
	- scaling HTTP servers are much eaier.
	- for real-time applications, the server fleet need to be persistent connect to 1 million users. 10-20k users concurent users for node.js for a single core, rust on 32core must be able to support more.
	- need like 50-100 servers.
- problem comes when these sessions are sticky.
	- sticky connections -> even if multiple people present in the same room, where messages/ events need to be transmitted together.
	- a single connection cannot add more than 200 connections.
	- sharding the users -> based on the room, connected to the same ws server.
	- ugly way to scale ws.
- better way to scale:
	- doesnt matter which room you are in, you connect to nearest geo server even if the same room.
	- problem is the latency in the server.the number of hops is more
	- harder to scale but is better way and can scale beyond 10k connections.
	- scale using pub/sub architecture .