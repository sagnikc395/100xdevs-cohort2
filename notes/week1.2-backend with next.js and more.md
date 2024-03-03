
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

### Doing the same in Next.js:
- in page.tsx adding the handler of using get using axios.:
	- make a async getUserData function
- make a async component :
	- to do async operations at the top of the component to fetch the data
	- can't do in React.
	- only in server components.
	- the standard way now to do this in next to do asynchronous data fetching.
- this component is not waterfalling model : hits the next.js server and pre-renders the data on the UI.
### Adding a Loader:
- what happens if the backend request takes a long time ? How to show the response on the UI.
- the solution is a loader.
- an opinionated thing out of the box provided by Next:
	- for a loading that we are going to get stuck for the route add a loading.tsx file.
	- During the time the await is getting called, the loading.tsx will get called.