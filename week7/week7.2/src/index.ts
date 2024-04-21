//simulate here updating the states

import initLogger from "./logger";
import { games } from "./store";

initLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayer: "Alice",
    blackPlayer: "Denzel",
    moves: ["1,2", "4,5"],
  });
}, 5000);
