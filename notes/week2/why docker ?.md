- Why introduced ?
	- container orchaestration is dependent on docker and kubernetes.
	- to run processes in an isolated environment -> 
		- run code in isloated manner for leetcode/ replit
		- many benefits to this
		- easily run 10 different applications and they cant talk to each other.
	- starting projects locally and auxillary services locally
		- no need to install other dependencies locally on hardware/ os
- Container are something which we can created indep  of docker.
- Container has not just our code but other dependencies :
	- mini machine running running inside our OS.
	- They are a way to package and distribute applications and various software and share to others.
- key thing: can be run on any machine and run consistently.
- steps to install and run a project can vary depending on the project.
	- can be very easy for someone on mac , but very difficut for someone on win.
	- they have to run a single command to run and build things indep of base os and base package manager.
- can start, execute and delete the container as we like it. ![[Screenshot 2024-03-09 at 7.15.10 PM.png]]
- lets us describe our configuration in a single file.
- can run in an isolated environment with restricted permissions.
- makes local setup of projects a breeze.
- Docker is not the only way to create containers.
## Docker Jargon:
![[Screenshot 2024-03-09 at 7.22.10 PM.png]]
- inside the app:
	- docker run -p 27017:27017 mongo
	- mongo starts running at the port .
	- terminal talking to the docker engine
	- can talk to it via terminal, rest apis, guis etc.
	- The engine is what starts the underlying software we want to interact with.
- image is the compiled version of the software from the registry 
	- it not found then fetches from remote 
	- else starts from local.
### Docker Engine:
- Open source containerisation tech that allows developers to package applications into containers.
- Contains are standardised executable components containing application source code with the OS libraries and its dependencies required to run that code in any environment.
## Docker CLI:
- Cli interface to talk to docker engine and lets us start/stop/list services .
### Docker Registry:
- Store where the images are stored.
- Eg: mongo, mysql etc.
- depends on where you want to push it.
- most open source projects keep on the docker registry.