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

/* OPEADORES DE ASIGNACION
Permiten guardar el resultado de una evaluación, operación o sólo datos dentro de una variable. */

// Asignación simple
var datoA = 10;
var igual = datoA; 
console.log("simple: " + igual);

// Sumar y Asignar
var masIgual = 10;
masIgual += datoA;
console.log("sumar y  asignar: " + masIgual);

// es la forma abreviada de
masIgual = masIgual + datoA;
console.log("sumar y asignar complejo: " + masIgual);

// Restar y Asignar
var menosIgual = 10;
menosIgual -= datoA;
console.log("restar y asignar: " + menosIgual);

// Multiplicar y Asignar
var porIgual = 10;
porIgual *= datoA;
console.log("multiplicar y asignar: " + porIgual);

// Dividir y Asignar
var entreIgual = 20;
entreIgual /= datoA;
console.log("dividir y asignar: " + entreIgual);