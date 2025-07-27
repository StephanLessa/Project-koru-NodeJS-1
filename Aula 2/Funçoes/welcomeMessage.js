function welcomeMessage(nameUser) {
    console.log("Olá, " +nameUser+ " seja bem-vindo ao curso!"); // Olá, Stephan seja bem-vindo ao curso!
} 
welcomeMessage('Stephan')

//Exemplo com variável que dá retorno

function welcomeMessage(nameUser) {
    let message = ", obrigado, por participar do curso.";
    return console.log(nameUser+message); // Stephan, obrigado, por participar do curso.
}   

