// MÉTODOS BÁSICOS
let frutas = ["Pera", "Uva", "Maça"];
console.log("Meu array inicial:", frutas);

//PUSH - Adiciona um elemento ao final do array
frutas.push("Banana");
console.log("Array após o push:",frutas);

// POP - remover um elemento do final do array
let ultimaFruta = frutas.pop()
console.log("Array após o pop:", frutas);
console.log("Fruta removida:", ultimaFruta);

// UNSHIFT - adiciona um elemento  no inicio do array
frutas.unshift("morango")
console.log("Array após o unshift: ", frutas);

// SHIFT - remove o primeiro elemento do array
let primeiraFruta = frutas.shift();
console.log("Array após o shift:", frutas);
console.log("Fruta removida:", primeiraFruta);



