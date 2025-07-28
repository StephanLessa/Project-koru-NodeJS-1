//Array de strings
let shoppingList = ["banana", "maçã", "laranja", "uva"];
// 4 valores 
// 3 indices (0 a 3)
console.log("valor do shoppingList:", shoppingList[2]); // valor do shoppingList: laranja

//Array de números
//let scores = [10, 20, 30, 40, 50, 70, 80, 90];
// 8 valores
// 7 indices (0 a 7)
//console.log("valor do score:", scores[5]); // valor do score: 70

// Array com tipo misto
let mixedData = [1, "banana", true, null, undefined, { name: "John" }, [1, 2, 3]];
// 7 valores
// 6 indices (0 a 6)
console.log("valor do mixedData:", mixedData[1]); // valor do mixedData: banana

//Array.at - acessando elementos de trás para frente

let scores = [10, 20, 30, 40, 50, 70, 80, 90];

console.log("valor do score:", scores[5]);
console.log("valor do Score:", scores.at(-5));  //valor do Score: 4
 