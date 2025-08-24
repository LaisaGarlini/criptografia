const readline = require("readline");

function deslocarChar(ch, k) {
  const code = ch.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + k) % 26 + 26) % 26 + 65);
  }
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + k) % 26 + 26) % 26 + 97);
  }
  return ch;
}

function cifraCesar(texto, chave) {
  return [...texto].map(ch => deslocarChar(ch, chave)).join("");
}

async function run() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const pergunta = (q) => new Promise(res => rl.question(q, res));

  console.log("Cifra de César");
  const texto = await pergunta("Digite o texto a ser cifrado: ");
  const chaveStr = await pergunta("Digite a chave numérica: ");
  const chave = parseInt(chaveStr, 10);

  if (isNaN(chave)) {
    console.log("Chave inválida!");
    rl.close();
    return;
  }

  const cifrado = cifraCesar(texto, chave);
  const decifrado = cifraCesar(cifrado, -chave);

  console.log("Cifrado :", cifrado);
  console.log("Decifrado:", decifrado);

  rl.close();
}

module.exports = { run };
