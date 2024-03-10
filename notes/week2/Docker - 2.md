### Layers in Dockerfile:
- Layers are a fundamental part of the image architecture that allows Docker to be efficient, fast and portable. A Docker image is essentially built up on a series of layers, each repr a set of differences from the previous layer.
- They run one after the other.
- Base Layer, Instruction Layer, Reusuable and sharable, immutable.
- if there are multiple layers, the previous layer result can be shared togehter with iamges and also cached.
- A Docker image is essentially a series of layers,that have some differences from the previous layer.
- If we change a file, it becomes uncached before compiling and the files that depend on it also become uncached.
- Note:
	- Base Image creates the first layer.
	- Each RUN, COPY , WORKDIR commands create a new layer.
	- Layers can be reused across Docker builds.
### Why Layers?
- if we change the dockerfile, everything else afterwards becomes uncached,the rest of the things to be uncached.
- We want the least amount of things to be uncached , across rebuilds.
- this saves time and cuts down on build time and help developers get much more build time.
- How often in a project does dependency change?
	- core logic :
		- most changes happen here
	- and dependency:
		- very less change
	- package.json:
		- very less change
		-   npm install only depends on package.json and does not depend on any other thing.
		- shouldnt re run npm install 20 times.
- the thing that takes not more time and expensive operation to do up the change.
- optimize the Dockerfile such that expensive steps are at front.
-  We first copy over only the things that `npm install` and `npx prisma generate` need
-  Then we run these scripts
-  Then we copy over the rest of the source code
![[Screenshot 2024-03-10 at 7.43.33 PM.png]]

### Networks and Volumes:
- Can create a volume so that when the image changes, the stock image of the docker also hot reloads and changes.
- if it does not , we need to change it something that hot reloads.
- become important that we have multiple containers and need to persist data across and using a database.![[Screenshot 2024-03-10 at 7.51.10 PM.png]]
- If we stop the container, the data goes away with the container. If a container needs to sends data across restarts, and if a container need to talk to each other, we need network.
- they need to be part of the same network.
### Volumes:
- If we restart a mongo docker container we notice that our data goes away.
- all container data is transitoray , whenver we close the app , the data will crash if docker crashes. If we attach volumes, then they can be written to storage and get the data from memory.
- whatever data present in the mount point, will remain same and will be sharing data. if any new process things use the same volume.
### networks:
- powerful feature that allows contianers to communicate to each other and with the outside world.
 ![[Screenshot 2024-03-10 at 8.05.30 PM.png]]
-  Docker containers cannot be default talk to each other.
- for this we need to connect to each of them, or same network layer. here localhost is the machine localhost, but the network created by the docker container itself.
- 