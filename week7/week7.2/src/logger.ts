//goal is to log the state on the server

// import { games } from "./store";
// // import { gameManager } from "./store";

// export default function initLogger() {
//   setInterval(() => {
//     gameManager.logState();
//   }, 5000);
// }

import { GameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        GameManager.getSingleton().logState();
    }, 4000)
}