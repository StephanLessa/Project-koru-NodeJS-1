// Looping através de um array com for

const frutas = ['maça', 'banana', 'uva']; 
for (let i = 0; i < frutas.length; i++) {  
  console.log("Indice: ",i, "frutas", frutas[i]);
}
/* declara que a variável 'indice' irá receber o valor de i, 
que começa em 0 e vai até o tamanho do array frutas
Indice:  0 frutas maça
Indice:  1 frutas banana
Indice:  2 frutas uva*/

const frutas2 = ['pera', 'laranja', 'abacaxi'];
for (let Fruta of frutas2) {  
  console.log("Fruta: ", Fruta);
}
/* Declara que a variável' Fruta' irá receber cada valor do array frutas2
Fruta:  pera
Fruta:  laranja
Fruta:  abacaxi*/


