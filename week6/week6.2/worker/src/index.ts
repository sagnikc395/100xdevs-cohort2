import { createClient } from "redis";

const client = createClient();

async function main() {
  await client.connect();
  while (true) {
    const response = await client.brPop("submissions", 0);
    //log what was put into the queue.
    console.log(response);
    //actually run the users code : docker exec
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //send to the pub sub
    console.log("Process users submissions");
  }
}

main();
