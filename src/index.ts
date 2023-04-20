import { hello } from "./hello";
import readline from "node:readline/promises";

async function main() {
  console.log(hello("world!"));

  const app = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await app.question("What do you think of Node.js? ");
    
  console.log(`Thank you for your valuable feedback: ${answer}`);
    
  app.close();
}

main();
