
### Next is primarily a backend framework.
- The same process can handle frontend and backend.
- Can create HTTP requests that can return JSON and connect to databases.
- Helpful for single deployment for all our codebase.
- No CORS issue, single domain for frontend and backend.
- Ease of deployment using a single codebase and dont need to maintain the backend and frontend separately.
- Before this React deployed on CDN and backend deployed on servers/ AWS.

### Data Fetching in React : 
- need to fetch the JSON Response from the backend , renders the data on the frontend using React.
- make a component that will do :
	- take state variables to maintain the state, and a loader state(optional)
	- add a data-fetching layer
	- add a a rendering a spinner stage(optional)
	- last component to render the card.
- useEffect with an empty array will fetch the data from the backend just once on loading.
- first set a loading spinner on mount and set the data on loading and whenever loading is false, then the card component renders. This is how loading works in React.
- Data Flow:
	- hit the url in CDN 
	- CDN returns empty html 
	- send JS file from browser 

- Can do this in Next.js also, but we miss on the server side rendering of the Next.js.
- We want the thing that is coming from the server, to be hydrated in the HTML itself.
- We want the initial request itself to give us back the data and the server talks to be backend , assuming that there is a seperate backend already exisiting.
- We want to do the data fetching in the nextjs server and that will talk to the backend server.
- we would fetch the data from the server and add 

- #### Doing the same in Next.js:
	- in page.tsx adding the handler of using get using axios.:
		- make a async getUserData function
	- make a async component :
		- to do async operations at the top of the component to fetch the data
		- can't do in React.
		- only in server components.
		- the standard way now to do this in next to do asynchronous data fetching.
	- this component is not waterfalling model : hits the next.js server and pre-renders the data on the UI.
- #### Adding a Loader In Next:
	- what happens if the backend request takes a long time ? How to show the response on the UI.
	- the solution is a loader.
	- an opinionated thing out of the box provided by Next:
		- for a loading that we are going to get stuck for the route add a loading.tsx file.
		- During the time the await is getting called, the loading.tsx will get called.
	- can add the loader for any sub page.


### Introducing API Routes:
- Do not need express / cloudflare workers anymore with next.js 
- code of next.js in single repo for frontend and backend.
- all standard things we get in a backend framework like express.
- server components can directly talk to the backend.

- moving backend into own app:
	- creating a hard-coded user value and hardcoded name and email for it and address.
- if we want to create a backend that returns api folder , create a api(inside app directory.) folder that will have the code inside it.
- This is just a convention and can be any other folder-name etc.
- inside that we create our folder structure.
	- same like for frontend , except for page.tsx , we create route.ts
- to create a GET handler for /api/user:
	- export a GET() function that returns a JSON response with the data required.

### Making frontend talk to own backend:
- brute force: change the URL to our own backend.
- wrong for a few reasons:

### Difference between actual node.js code and server actions:
- actual react deployment:
	- 2 code bases -> react code  -> npm run build -> html,css and js files and put on S3 -> create a CDN (CloudFront distribution) and tell the distribution the backend where we will our frontend part .
		- Frontend is independently deployed on CDN's that serve the CDN.
	- backend code -> node.js code 
		- deploy on a single machine by running node index.js 
		- kept in a single place and the CDN's route the requests to this backend.
- Next.js is also similarly deploying the BE ; so can't really distribute it via CDN. Effectively we are running a HTTP Server.
- Popular way to deploy using Edge networks, but with less caching.
- Databases are not on the same machine as the applications(almost always forever)
- dont self host db most of the time; use 3rd party like neon, rds etc.(which have enough replication already)


### Completing the Signup
- Create a signup component and connect to client componet.
- useRouter -> navigate the history on button click. use from next/navigation otherwise will give useRouter was not unmounted error.


### Connecting to Neon.db :
- Create a postgres db on neon.tech.
- install prisma and do npx prims init
- npx prisma init and define the model for the data in ORM.
- add the database url in .env file 
- make migrations on the database to create tables. using npx prisma migrate dev --name init_schema
- revise again from this slide 9 ;
- https://projects.100xdevs.com/tracks/nextjs-2/next-2-9