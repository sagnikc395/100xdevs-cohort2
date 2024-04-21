//goal is to log the state on the server

import { games } from "./store";

export default function initLogger() {
  setInterval(() => {
    console.log(games);
  }, 5000);
}
