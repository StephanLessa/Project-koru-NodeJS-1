//MÉTODOS DE OBJETOS
let carro = {
  marca: 'Fiat',
  modelo: 'Palio',
  ano: 2000,
  cor: 'vermelho'
}

for (let chave in carro){
    console.log(chave, ':', carro[chave]);
}

console.log('cor:', carro.cor);
carro.cor = 'verde'; // modifico a cor/ a chave cor
console.log('cor:', carro.cor);

//somente valores
console.log('valores:', Object.values(carro)); // valores: [ 'Fiat', 'Palio', 2000, 'verde' ]
//somente chaves
console.log('chaves:', Object.keys(carro)); // chaves: [ 'marca', 'modelo', 'ano', 'cor' ]
//todas as entradas
console.log('entradas:', Object.entries(carro)); // entradas: [ [ 'marca', 'Fiat' ], [ 'modelo', 'Palio' ], [ 'ano', 2000 ], [ 'cor', 'verde' ] ]
