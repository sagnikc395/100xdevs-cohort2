
### nextjs ; why ?
- Created due to some minor inconvinieces in React
	- In React have to maintaina seperate backend project for API routes.
	- React -> compiled down to -> HTML,CSS and JS 
	- Either live in seperate repos and different directory.
	- React does not provide out of the box routing an have to use react-router-dom
	- Next provides this out of the box (routing) using file based routing.
	- React is not SEO optimized -> main reason
		- Not exactly true today due to React Server components
		- could not rememeber and rank by Google Search 
		- Waterfalling problem 

### SEO Optimization:
- How does Google Rank ?
	- Crawlers all around the world that constantly crawling and hitting and trying to understand what is the website doing and ranking them based on relevance.
	- CDN -> React Served from -> 
		- Crawlers dont ususally run the js , but check the html.
		- React doenst give us the HTML that we want.
	- When rendered it does not initall have any text, eventually it gets rendered.The HTML initially have nothing, a lot of the text intially is not present initially. Initial render does not have the SEO optimized and the HTML.
### Waterfalling Problem:
- When it routes to /pages, the requests goes out are :
	- GET /index.html -> first requests get the index.html and since there is a request for js file another call goes out to get the js file and then recursively 
	- one after the other , they waterfall depends on the JS -> depends on the HTML etc.


- Bunch of big things it provides :
	- SEO Optimized (main issue) -> Next expensive while hosting.
	- Waterfall Problem been solved

### Next.js Offerings:
- Upsides over React:
	- Server Side Rendering:
		- rendered on the server put on the HTML and returned the HTML
	- API Routes:
		- full stack framework dont really need a seperate express application. 
	- File Based Routing:
		- no need for react-router-dom
	- Bundle Size Optimization:
		- Compressed code generation for build output; Use vite for the same for react. 
		- And do static site generation.
	- Maintianed by the Vercel Team 
		- React is just a side project of FB.
- Downsides:
	- Cant be distributed via a CDN, always needs a server running that does server side rendering and hence expensive.
	- Very opinionated, very hard to move out of it and deploy out of Vercel.
		- Probably sticking to next and cannot use another frontend framework.


