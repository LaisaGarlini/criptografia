const readline = require("readline");

function normalizaTexto(txt) {
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function cifraVigenere(texto, chave) {
  let resultado = "";
  texto = normalizaTexto(texto).toUpperCase();
  chave = normalizaTexto(chave).toUpperCase();
  let j = 0;

  for (let i = 0; i < texto.length; i++) {
    const ch = texto[i];
    if (ch >= "A" && ch <= "Z") {
      const t = ch.charCodeAt(0) - 65;
      const k = chave[j % chave.length].charCodeAt(0) - 65;
      resultado += String.fromCharCode(((t + k) % 26) + 65);
      j++;
    } else {
      resultado += ch;
    }
  }
  return resultado;
}

function decifraVigenere(texto, chave) {
  let resultado = "";
  texto = normalizaTexto(texto).toUpperCase();
  chave = normalizaTexto(chave).toUpperCase();
  let j = 0;

  for (let i = 0; i < texto.length; i++) {
    const ch = texto[i];
    if (ch >= "A" && ch <= "Z") {
      const t = ch.charCodeAt(0) - 65;
      const k = chave[j % chave.length].charCodeAt(0) - 65;
      resultado += String.fromCharCode(((t - k + 26) % 26) + 65);
      j++;
    } else {
      resultado += ch;
    }
  }
  return resultado;
}

async function run() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const pergunta = (q) => new Promise(res => rl.question(q, res));

  console.log("Cifra de Vigenère");
  const texto = await pergunta("Digite o texto a ser cifrado: ");
  const chave = await pergunta("Digite a palavra-chave: ");

  const cifrado = cifraVigenere(texto, chave);
  const decifrado = decifraVigenere(cifrado, chave);

  console.log("Cifrado :", cifrado);
  console.log("Decifrado:", decifrado);

  rl.close();
}

module.exports = { run };
