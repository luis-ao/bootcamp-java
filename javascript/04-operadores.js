/*
operadores aritmeticos nos siverva para hacer operaciones
 + sirve para sumar o concatenar
 - sirve para restar
 * sirve para multiplicar 2 números
 % módulo nos sirve para obtener el residuo de una división
 / división nos sirve para dividir  
*/

/* const n1 = 34;
const n2 = 5;
const suma = n1+ n2; */

// DATOS //
const n1 = parseInt(prompt("Ingresa el número 1"));
const n2 = parseInt(prompt("Ingresa el número 2"));

// OPERACIONES //
const suma = n1 + n2;
const resta = n1 - n2;
const multiplicacion = n1 * n2;
const division = n1 / n2;
const residuo = n1 % n2;

// RESULTADO //
console.log("suma: " + suma);
console.log("resta: " + resta);
console.log("multiplicación: " + multiplicacion);
console.log("división: " + division);
console.log("residuo: " + residuo);

