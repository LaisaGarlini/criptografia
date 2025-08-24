const readline = require("readline");
const cesar = require("./cesar");
const vigenere = require("./vigenere");
const rsa = require("./rsa");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("======================================");
console.log("    MENU DE CRIPTOGRAFIA - NODE.JS    ");
console.log("======================================");
console.log("1️⃣  Cifra de César");
console.log("2️⃣  Cifra de Vigenère");
console.log("3️⃣  RSA");
console.log("4️⃣  Sair");
console.log("======================================\n");

rl.question("➡️ Escolha uma opção (1-4): ", (op) => {
  rl.close();
  if (op === "1") cesar.run();
  else if (op === "2") vigenere.run();
  else if (op === "3") rsa.run();
  else console.log("Saindo...");
});
