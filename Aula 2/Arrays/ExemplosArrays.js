const myArray = Array.from(
    { length: Math.floor(Math.random() * 500)},
    (_, i) => i
);
// Comentar a const random para utilizar a const fixa
// Vou tornar a minha constante fixa para resolver a última pergunta ou usar o random
const myArray = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Quantos itens o array criado possui?
console.log("total de elementos: ", myArray.length); //total de elementos:  209

//Acesso o primeiro elemento do array
console.log("Primeiro elemento: ", myArray[0]) //O primeiro elemento sempre será 0

//Acesse o último elemento desse array
console.log("último elemento: ", myArray.at(-1)); //último elemento:  208

//Acesse o penultimo elemento desse array
console.log("penúltimo elemento: ", myArray.at(- 2)); //penúltimo elemento:  207

//Qual é o maior e qual é o menor valor do array?
const maior = Math.max(...myArray);
const menor = Math.min(...myArray);

console.log("maior elemento:", maior) //maior elemento: 10
console.log("menor elemento:", menor) //menor elemento: -1