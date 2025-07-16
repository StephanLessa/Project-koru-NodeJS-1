// Operadores lógicos em JavaScript
// && ( E lógico), || (OU lógico), ! (NÃO lógico)
const a = true;
const b = false;
const c = true;
const d = false;
// E lógico
const resultadoE = a && b; // false, pois "b" é falso
console.log("Resultado do E lógico (a && b):", resultadoE);

// Exemplo:
let userName = "Stephan Lessa";
let userAge = 32;
// Faixa etária >= 18 E faixa etária <= 65 = "Adulto"

if (userAge >= 18 && userAge <= 65) {
  console.log(userName + " é um adulto.");
} else {
  console.log(userName + "não é um adulto.");
}
