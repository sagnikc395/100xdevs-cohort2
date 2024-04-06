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