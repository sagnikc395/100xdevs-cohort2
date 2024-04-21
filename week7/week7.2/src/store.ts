//a ugly version of maintinaing state

type Game = {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
};

// export const games: Game[] = [];
//a better abstraction

class GameManager {
  games: Game[] = [];
  moves: string[] = [];
  constructor() {
    this.games = [];
  }

  public addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      this.moves.push(move);
    }
  }

  public addGame(gameId: string) {
    const game: Game = {
      id: gameId,
      whitePlayer: "ABC",
      blackPlayer: "DEF",
      moves: this.moves,
    };
    this.games.push(game);
  }

  public logState() {
    console.log(this.games);
    console.log(this.moves);
  }
}
export const gameManager = new GameManager();
