//using pubsub with singleton pattern

//a pub sub manager class
export class PubSubManager {
  private static instance: PubSubManager;

  private constructor() {}

  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  //TODO!
  addUserToStock(userId: string, stockTicker: string) {}

  removeUserFromStock(userId: string, stockTicker: string) {}

  forwardMessageToUser(userId: string, stockTicker: string, price: string) {}
}
