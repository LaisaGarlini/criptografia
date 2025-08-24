# Atividade de Criptografia

Este projeto implementa três algoritmos clássicos de criptografia em
Node.js:

-   Cifra de César → criptografia simétrica usando um número como chave
-   Cifra de Vigenère → criptografia simétrica usando uma palavra-chave
-   RSA → criptografia assimétrica com chave pública e privada

O projeto possui um menu interativo (menu.js) para escolher qual
algoritmo deseja rodar.

------------------------------------------------------------------------

## Como executar

1. Clonar o repositório
```
git clone https://github.com/LaisaGarlini/criptografia.git
cd criptografia
```
2. Rodar o menu
```
node menu.js
```
------------------------------------------------------------------------

## Menu principal

Ao rodar node menu.js, será exibido:
```
======================================
    MENU DE CRIPTOGRAFIA - NODE.JS    
======================================
1️⃣  Cifra de César
2️⃣  Cifra de Vigenère
3️⃣  RSA
4️⃣  Sair
======================================

➡️ Escolha uma opção (1-4):
```
------------------------------------------------------------------------

## Exemplos de uso

### Cifra de César

```
Digite o texto a ser cifrado: sistema de informacao
Digite a chave numérica: 4
Cifrado : wmwxiqe hi mrjsvqeges
Decifrado: sistema de informacao
```

### Cifra de Vigenère

```
Digite o texto a ser cifrado: sistemas de informacao
Digite a palavra-chave: oi
Cifrado : GQGBSUOA RM WVTWFUOKOW
Decifrado: SISTEMAS DE INFORMACAO
```

### RSA

```
Informe p (ENTER=61): 61
Informe q (ENTER=53): 53
Chave pública : (65537, 3233)
Chave privada : (2753, 3233)
Digite a mensagem: sistemas de informacao
Cifrado : 1230 3179 1230 884 1313 2271 1632 1230 1992 1773 1313 1992 3179 2235 1369 2185 2412 2271 1632 281 1632 2185
Decifrado: sistemas de informacao
```

------------------------------------------------------------------------

### Autor

Projeto desenvolvido por Laisa Garlini como atividade prática de
criptografia.
