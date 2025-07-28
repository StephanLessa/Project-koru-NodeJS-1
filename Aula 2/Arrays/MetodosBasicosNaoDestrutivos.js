//MÉTODOS BÁSICOS NÃO DESTRUTIVOS

const animais = ["gato","cachorro", "cobra","pato","girafa"];

// SLICE
// Retorna uma cópia de uma parte do array dentro de um novo array selecionado do array original, começando pelo início até o fim (fim não incluído).
const animaisMeio = animais.slice(1, 4); // do indice 1 até ANTES do 4
console.log("Slice: ", animaisMeio);

// INCLUDES: verifica se o elemento buscado existe no array
console.log("includes PATO: ", animais.includes("pato")); // true
console.log("includes ELEFANTE: ", animais.includes("elefante")); // false

// INDEXOF: retorna o índice do elemento encontrado no array, caso não encontre retorna -1
console.log("IndexOf PATO: ", animais.indexOf("pato")); // 3
console.log("IndexOf ELEFANTE: ", animais.indexOf("elefante")); // -1

// CONCAT:  junta dois ou mais arrays, retornando um novo array
const animais1 = ["ovelha", "cavalo", "porco", "galinha", "vaca"];
const animais2 = ["elefante", "leão", "tigre", "urso", "zebra"];
const todosAnimais = animais1.concat(animais2);
console.log("Todos os Animais CONCAT:", todosAnimais)
/*Todos os Animais CONCAT: [
  'ovelha', 'cavalo',
  'porco',  'galinha',
  'vaca',   'elefante',
  'leão',   'tigre',
  'urso',   'zebra' */

// JOIN: junta todos os elementos do array em uma string, separados por vírgula por padrão

console.log("Todos os Animais JOIN:", todosAnimais.join(','));
//Todos os Animais JOIN: ovelha,cavalo,porco,galinha,vaca,elefante,leão,tigre,urso,zebra


