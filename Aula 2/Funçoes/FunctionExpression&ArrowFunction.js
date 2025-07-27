function convertToCelsius(fahrenheit) {
     return (fahrenheit-32) * 5/9; //formula de conversão F em C
}
console.log("100 F =", convertToCelsius(100).toFixed(1), "C"); //100 F = 37.8 C

//pode ser escrita como =

const convertToCelsius1 = fahrenheit => (fahrenheit - 32) * 5/9;
console.log("50 F =", convertToCelsius1(50).toFixed(1), "C"); // 50 F =  10.0 C

