
### nextjs ; why ?
- Created due to some minor inconveniences in React
	- In React have to maintain separate backend project for API routes.
	- React -> compiled down to -> HTML,CSS and JS 
	- Either live in separate repos and different directory.
	- React does not provide out of the box routing an have to use react-router-dom
	- Next provides this out of the box (routing) using file based routing.
	- React is not SEO optimised -> main reason
		- Not exactly true today due to React Server components
		- could not remember and rank by Google Search 
		- Waterfalling problem 

### SEO Optimization:
- How does Google Rank ?
	- Crawlers all around the world that constantly crawling and hitting and trying to understand what is the website doing and ranking them based on relevance.
	- CDN -> React Served from -> 
		- Crawlers dont usually run the js , but check the html.
		- React doesn't give us the HTML that we want.
	- When rendered it does not install have any text, eventually it gets rendered.The HTML initially have nothing, a lot of the text initially is not present initially. Initial render does not have the SEO optimised and the HTML.
### Waterfalling Problem:
- When it routes to /pages, the requests goes out are :
	- GET /index.html -> first requests get the index.html and since there is a request for js file another call goes out to get the js file and then recursively 
	- one after the other , they waterfall depends on the JS -> depends on the HTML etc.


- Bunch of big things it provides :
	- SEO Optimised (main issue) -> Next expensive while hosting.
	- Waterfall Problem been solved

- when we ask the server for something and only when it responds can we send a response next, is called waterfalling. read about how graphql was created to prevent this.
- in next.js waterfalling does not happen and the whole data that is required ois returned directly.

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


### Folder Structure:
- tailwind.config.ts
	- already tailwind bootstrap with the folder configured in it.
	- we are using app router in modern versions (nextjs 13+) and can add our components and add default theme in theme: extend .
- next.config.mjs
	- important when we reach monorepos and transpiling.
- package.json
	- has already our dependencies
	- next built on top of react
	- eslint -> lint and structure our project.
		- important dependency that comes in our code base
- app 
	- most important folder and where we write our code
	- page.tsx , layout.tsx 
- components:
	- cross shareable components and utilites.

### Routing in Next:
- Needed react-router-dom to route using explicit routing logic defined in the root comoponent.
- bring external dependency .
- Next is highly opinionated on how to do routing in next.
- Next uses file based routing: < refer docs after class >
	- Very popular way to create routes.
	- This means the way we create files, determines what files we have created.
	- Files created in app/ direction will result in how the routes are created.
- page.tsx is only being rendered for the / route.
- wont be rendered for any other routes.
- to create a signup route :
	- create a new folder in app router called signup 
	- add a page.tsx and inside create a default function(name wont matter) and return from there.s
- same to create more routes for other routes.
- Dynamic routing done using :\[...courseID] in the app folder to catch everything with it, called as dynamic slugs. 
### Server Side Rendering in Next:
- Means that the HTML is created in the server and return back to the client.
- Google Crawler will hit the particular page and return it back to us.
- It is not a empty body any more and is more discoverable for a SEO bot.
- similar to EJS templating (which itself is a server side rendering).
- sepration of concerns not good for it.(both frontend and backend present in it).


### layout.tsx:
- it lets us wrap all of our child pages inside of some logic.
- exports a metadata object (metadata): can change the title and description of it.
- can also create routes inside nested routing also.
- exports a component by default :
	- first a html tag
	- then a body tag with a classname properties of the font object
- if we keep a component here , we will see this on top of every page even 404 ones.
- every page that we create , irrespective of that first wrap everything that is being rendered.
- can introduce a layout.tsx for all pages that start with /signin
- **dont forget to get the children as props**

### Merging routes:
- Both want to merge the banner in signin and also in the signup page, but not on the route page.
- Put all the autnetication routes in an auth folder 
- move both signin and signup in auth folder 
- and make a global layout.tsx for the auth folder.
- access using /auth/sign and /auth/signup to access the banner for different routing.
- Problem is have to use /auth before routing to /signup and /signin
- Approach 2:
	- using folder name as (auth) .
	- nextjs will ignore the folder in the routes.


### components directory
- keep the styles and reusuable components in the component directory
- create a top-level folder called components and keep your components there.
- can be names anything also
- just make sure that it is kept in the content array in the tailwind config file.
- to make the components reusuable and used across


### Client and Server Components:
- Revise Again 
- Nextjs wants us to identify our components whether client or server.
- There are 2 types of components, either a client component or a server component.
- as the name suggests:
	- Server components are rendered on the server 
	- Client components are pushed to the client to be rendered.
- onClick handler is a client component, not a server component.
- probably make signin a client component.
- if we need SEO, make it a server component 
- onClickHandler to be make client component.
- add 'use client' on top of the file to make it a client component.
- By default all components are server components.
- when a component requires interactivity we need to add a client component.
- useState, onClickHandler  etc. buttons that add these hooks, then we convert it into a client component.
- whatever as far as i can go use client and then use rest as server component.
- For SEO optimizing , create another components that is rendered client side (not require SEO optimized) , and the other component be SEO optimzed.
- Defer as much as Client interactivity as possible and mark the other as server component.
-  Issues:
	Server has a client has a server has a client children ?
	ref to the nextjs issue


good questions to google:
- client side components rendering on client side or server side ?
- why do react component gets ssr'd into html ? 