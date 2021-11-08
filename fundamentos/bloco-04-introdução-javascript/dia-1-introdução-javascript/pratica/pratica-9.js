/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const num1 = 3;
const num2 = 5;
const num3 = 7;

let soma1 = num1 % 3;
let soma2 = num2 % 3;
let soma3 = num3 % 3;

if (soma1 === 0 || soma2 === 0 || soma3 === 0) {
  console.log("true");
} else {
  console.log("false");
}
