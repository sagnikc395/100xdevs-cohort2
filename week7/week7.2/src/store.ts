//a ugly version of maintinaing state

type Game = {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
};

// export const games: Game[] = [];
//a better abstraction

export class GameManager {
  games: Game[] = [];
  moves: string[] = [];
  // type of the instance will be of the GameManager type only
  //as this has to create a new instance itself
  private static instance: GameManager;
  private constructor() {
    this.games = [];
  }

  static getSingleton() {
    //add logic to init singleton pattern constructor
    //called from inside the class
    //const manager = new GameManager();
    //this will create a single instnace and not create again and again

    if (GameManager.instance) {
      return GameManager.instance;
    }
    GameManager.instance = new GameManager();
    return GameManager.instance;
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
