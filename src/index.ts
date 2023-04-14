import { hello } from "./hello";
import readline from "node:readline";

function main() {
  console.log(hello("world!"));

  const app = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  app.question("What do you think of Node.js? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  });

  app.close();
}

main();
