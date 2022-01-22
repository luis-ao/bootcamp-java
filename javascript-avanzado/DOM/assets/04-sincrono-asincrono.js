// CÓDIGO SINCRONO
let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

// CÓDIGO ASINCRONO 
let variableAsincrona;

setTimeout(() => {
    variableAsincrona = 10 * 3;
}, 2000);

// En este ejemplo aún no le da valor a la variable y console no se espera por lo cuál lo imprime como valor undefined

console.log(variableAsincrona)