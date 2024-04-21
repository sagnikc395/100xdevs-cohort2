//simulate here updating the states

// import { gameManager } from "./store";

// import initLogger from "./logger";
// //import { games } from "./store";

// initLogger();

// setInterval(() => {
// //   gameManager.addGame(Math.random().toString());
// //   gameManager.logState();
// gameManager
// }, 5000);

// setInterval(() => {
//   games.push({
//     id: Math.random().toString(),
//     whitePlayer: "Alice",
//     blackPlayer: "Denzel",
//     moves: ["1,2", "4,5"],
//   });
// }, 5000);
import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getSingleton().addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)