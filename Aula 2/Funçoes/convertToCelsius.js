function convertToCelsius(fahrenheit) {
     return (fahrenheit-32) * 5/9; //formula de conversão F em C
}
console.log("100 F = ", convertToCelsius(100), "C"); //100 F =  37.77777777777778 C

// Posso escolher quantas casas decimais eu quero exibir, usando (toFixed(n de casas))
console.log("100 F = ", convertToCelsius(100).toFixed(2), "C"); // 100 F =  37.78 C
console.log("50.0 F = ", convertToCelsius(100).toFixed(1), "C"); // 50.0 F =  37.8 C