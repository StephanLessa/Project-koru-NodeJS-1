//Crie uma função "sumAll", ela poderá receber quantos argumentos forem necessários e 
// deverá retornar o valor da soma de todos os argumentos.

function sumAll(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return args.reduce((acc, curr) => acc + curr, 0);
}   



