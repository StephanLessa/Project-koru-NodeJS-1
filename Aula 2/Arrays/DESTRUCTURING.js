// Destructuring é uma sintaxe que permite extrair valores de arrays ou propriedades de objetos em variáveis.

const pessoa = {
   nome: "Stephan",
   idade: 32,
   cidade: "Juiz de Fora"
}

// SEM destructuring
const nome1 = pessoa.nome // Stephan

// COM destructuring
const{nome, idade} = pessoa

console.log(nome1); // Stephan
console.log(nome, idade); // Stephan 32




