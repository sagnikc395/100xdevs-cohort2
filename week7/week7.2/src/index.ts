//simulate here updating the states

import { gameManager } from "./store";

// import initLogger from "./logger";
// //import { games } from "./store";

// initLogger();

setInterval(() => {
  gameManager.addGame(Math.random().toString());
  gameManager.logState();
}, 5000);

// setInterval(() => {
//   games.push({
//     id: Math.random().toString(),
//     whitePlayer: "Alice",
//     blackPlayer: "Denzel",
//     moves: ["1,2", "4,5"],
//   });
// }, 5000);
