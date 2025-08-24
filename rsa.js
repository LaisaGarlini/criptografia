const readline = require("readline");

function mdc(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}
function modPow(base, exp, mod) {
  let result = 1n;
  let b = BigInt(base) % BigInt(mod);
  let e = BigInt(exp);
  const m = BigInt(mod);
  while (e > 0n) {
    if (e & 1n) result = (result * b) % m;
    b = (b * b) % m;
    e >>= 1n;
  }
  return result;
}
function egcd(a, b) {
  if (b === 0n) return { g: a, x: 1n, y: 0n };
  const { g, x, y } = egcd(b, a % b);
  return { g, x: y, y: x - (a / b) * y };
}
function modInv(a, m) {
  const { g, x } = egcd(BigInt(a), BigInt(m));
  if (g !== 1n) throw new Error("Sem inverso.");
  return ((x % BigInt(m)) + BigInt(m)) % BigInt(m);
}
function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}

async function run() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const pergunta = (q) => new Promise(res => rl.question(q, res));

  console.log("RSA (Assimétrica)");
  const pStr = await pergunta("Informe p (ENTER=61): ");
  const qStr = await pergunta("Informe q (ENTER=53): ");
  const p = pStr.trim() === "" ? 61 : parseInt(pStr, 10);
  const q = qStr.trim() === "" ? 53 : parseInt(qStr, 10);

  if (![p, q].every(Number.isInteger) || !isPrime(p) || !isPrime(q)) {
    console.log("p e/ou q inválidos.");
    rl.close();
    return;
  }

  const n = BigInt(p) * BigInt(q);
  const phi = BigInt(p - 1) * BigInt(q - 1);
  let e = 65537n;
  if (mdc(Number(e % phi), Number(phi)) !== 1) {
    e = 3n;
    while (e < phi && Number(mdc(Number(e), Number(phi))) !== 1) e += 2n;
  }
  const d = modInv(e, phi);

  console.log("Chave pública :", `(${e}, ${n})`);
  console.log("Chave privada :", `(${d}, ${n})`);

  const msg = await pergunta("Digite a mensagem: ");
  const cifrado = [];
  for (const ch of msg) {
    const m = BigInt(ch.charCodeAt(0));
    if (m >= n) {
      console.log(`Caractere '${ch}' não pode ser cifrado (m >= n).`);
      rl.close();
      return;
    }
    cifrado.push(modPow(m, e, n).toString());
  }

  console.log("Cifrado :", cifrado.join(" "));
  const decodigos = cifrado.map(c => Number(modPow(BigInt(c), d, n)));
  console.log("Decifrado:", String.fromCharCode(...decodigos));

  rl.close();
}

module.exports = { run };
