//a ugly version of maintinaing state

type Game = {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
};

export const games: Game[] = [];
