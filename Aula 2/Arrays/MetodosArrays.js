// MAP, FILTER e FIND em ARRAY de OBJETO

const alunos = [
{nome: 'Ana', nota: 8},
{nome: 'Roberto', nota: 5},
{nome: 'Carla', nota: 9},
];

// MAP: Transformar em lista de nomes
const nomes = alunos.map(aluno => aluno.nome);
//'Ana', 'Roberto', 'Carla' ]

// FILTER: Filtrar alunos aprovados
const aprovados = alunos.filter(aluno => aluno.nota >= 6);
//[ { nome: 'Ana', nota: 8 }, { nome: 'Carla', nota: 9 } ]

// FIND: Encontrar o aluno com nota 9
const nota9 = alunos.find(a => a.nota === 9);
//{ nome: 'Carla', nota: 9 }

// Exemplo de uso
console.log(nomes);
console.log(aprovados);
console.log(nota9);


