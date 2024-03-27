
### Architecture:
- Paytm for merchants and accounts -> vast version of PayTM.
- Planning (feature planning):
	- generally features collected by PM ; for small startups generally done by founding team and engineers; for big companies generally done by PM and see analytics; UI/UX later stage by designers, initially copy from competitor.
    - HLD:
	    - Auth Provider:
		    - Inhouse,Exteranl
		- Database:
			- just use postgres
		- backend:
			- next + ts
		- frontend:
			- next + ts
		-  modules :
			- monorepo
		- cloud to deploy to
	- LLD:
		- Schema
		- Route Signatures
		- Frontend Components - debatable
	- ER Diagrams:
		- not requires for small startups
	- How to think about features:
		- ususally from product team
		- if founder, do whatever hell![[Screenshot 2024-03-23 at 7.14.47 PM.png]]
		- Complexity:
			- Scrappy from start and then make scalable.
- UserEnd:
	- Login,SignUp, Landing Page, Dashboard (for showing balance with bargraph,), user transfer page(to transfer money from wallet and then transact and offramp to bank)
- Merchants have different login and differnent UI and they can track and check from it.
	- login with github, google -> to add more auth providers.
	- dashboard and how much money in their shop and transactions on it.
- PayTM vs Binance:
	- generally send USDT.
	- these bank api servers we cant just assume that they wont have latency and has it reached or not.
	- same happens in a crypto exchange.![[Screenshot 2024-03-23 at 7.23.26 PM.png]]
	- the way we design the architecture is the system would be highly unreliable and and be latent.
- PayTM Frontend and Backend Architecture:
	- Nextjs server where we have the frontend and backend of Paytm with a postgres db, keeps track of all users , balances and transfers.
	 ![[Screenshot 2024-03-23 at 7.24.57 PM.png]]
	- Bank server needs to tell us if money sent or not:
		- Same backend in next.js or a different backend (express) (hosted on a webhook). This needs to be highly available and if they not able to sent we need to check for traffic also.
		- ![[Screenshot 2024-03-23 at 7.27.14 PM.png]]
	- one more thing...
		- people might send money back to HDFC bank and might not like the wallet anymore.
		- the money from paytm's bank account reached HDFC bank and have to -200RS to wallet, and is a webhook thing that they have written. 
		- ![[Screenshot 2024-03-23 at 7.35.00 PM.png]]
### Hot Paths:
- Send Money to someone ; prevent double spending ; dont hit in parallel
- withdraw balance of merchant
- withdraw balance of user back to back
- webhooks from banks to transfer the money.

### 1-month job for 2 engineer team.
 Cut backs:
	- UI
	- Number of features we support (remove merchant altogether)
	- number of services we need (merge bank server,do withdrawls directly and not in queue assuming banks are always up.)

