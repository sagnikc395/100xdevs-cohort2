- A Youtube Clone with Next.js and Tailwind for practical deployment 
- For learning all frontend for all practical purposes.
- Hands on Learning of React and Next.js 
- Things to know in a frontend framework:
	- Flex
	- Grids
	- Responsiveness
	- Background Color, Text Color, Hover.
	- these things are usually enough to make the clone of any other project.

- Flex , flexbox:
	-  div is meant to take the complete width , to use things in the same line use flex.
	- justifyContent is given the children are in the same flex , how should be place them. only take as much space needed.
	- ![[Screenshot 2024-03-04 at 8.51.11 AM.png]]
	- most of the start use space-between and center 
	- default is flex-start.
- Tailwind is a new library , we directly put the thing in classname and use flex and justify-between.
- justify-center is the equivalent to center the content of it.
- 20 odd classnames that we need to know for Tailwind for building a simple YT Clone.

### Grids in TW:
- to put another 3 elements in grid row , use grid and grid-cols-3 ; meaning 3 mons grid , equally distributed and taking equal spaces.
- need to understand how to create a grid with different width's.
- for unequal witdths :
	- assuming  windows is present in 12 widths each, we use cols-span-x to define x amount of width being taken by each grids

### Responsiveness:
- go to https://tailwindcss.com/docs/responsive-design 
- when width is bigger we used cols 3 , when it is smaller we take cols2 and when really smaller we take cols 1 
- 5 breakpoints have been defined in Tailwindcss.
	- if width is 640px , it is at sm breakpoint.
	- if 768px is width, then md breakpoint 
	- etc.
	- sm,md,lg,xl,2xl are the most common responsiveness
- Need to tell tailwind to conditionally render according to the screen size.

### Tailwind is Mobile First fashion:
- Tailwind uses a moible first fashion.
- Unprefixed utilities like uppercase take effect on off screen size, while profile utilities like md-uppercase only takes effetcs on the specificed prefixed size.
- sm-text-center is not how tailwind works.
- if below default it will use normal and when not mobile screen huge, it is not center. ![[Screenshot 2024-03-04 at 9.09.10 AM.png]]
### Tailwind has a inbuilt color system 
- usually used by people.
- can change special color, we can define in our config file.

### background/font colors
- bg-green-500 text-red-500 
- text color as green shade 500
- and red shade for text as 500

### font-size:
- font-xl 
- xl size of font , see other relative sizes using fonts
- no easy way to change the size, except change them in the config file.

### Border-Radius:
-  normal css we have to do : border-radius.
- in tailwind :
	- rounded-sm , rounded-lg etc. like relative format.



## Youtube-Clone:
- HLD:
	- appbar at top
	- hamburger icon 
	- signin button 
	- search bar
	- leftbar 
	- grid system
	- title
	- buttons 
	- description 
	- comments 
- protip: build individual components and then glue these components together.
- in src/components/VideoCard.tsx ->
	- are where the components are being created.
	- called as videocard and is a normal react component.
	- components return html or other components recursively.
	- these could have divs or spans or other html component that we have created or internal components recursively.
	- here we write a lot of reusuable logic.
- keep images in public/ folder , this contains our assets.
- 