// operadores de comparação
// SEM RETORNARÃO COM "TRUE" OU "FALSE"
let a = 10;
let b = 5;
let c = 10;

// igualdade
let isEqual = a == b; // false
let isStrictEqual = a === c; // true (mesmo valor e tipo)
let isNotEqual = a != b; //true
let isStrictNotEqual = a !== c; // true (mesmo valor, tipos diferentes)

//exemplos:
console.log( 5 == 5); // Igualdade (true)
console.log(5 != 3); // Desigualdade (true)
console.log(5 === 5); // Igualdade estrita (true)
console.log(5 > 3); // Maior que (true)
console.log(5 < 3); // Menor que (false)
console.log(5 >= 5); // Maior ou igual a (true)
console.log(5 <= 3); // Menor ou igual a (false)
