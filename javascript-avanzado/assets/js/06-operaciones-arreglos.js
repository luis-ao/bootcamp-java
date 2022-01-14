
let numeros = [18, 8, 345, 12, 56, 789, 6, 34];

numeros.forEach(function (numero) {
    document.write(numero + ', ');
});

/* La ventaja de usar forEach es que no necesitamos detener el cliclo a comparación del siguiente:
for(let i = 0; i < numeros.length; i++) {
    document.write(`${numeros[i]} <br/>`)} */

/* numeros.forEach(function (elemento, indice) {
     document.write(elemento + '-' + indice + '<br/>');
});  // indice nos ayuda mostrando la posición de cada elemento */

/* numeros.forEach(elemento => {
    document.write(elemento + ', ')}); */

/* let numeros2 = numeros.map(function(elemento) {
    return elemento; });

document.write('<br/>' + numeros2); */

// podemos hacer modificaciones como multimiplica, dividir, etc.

/* let numeros2 = numeros.map(function(elemento) {
    return elemento * 2; });

document.write('<br/>' + numeros2); */


/* let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');

frutas2.push('pera');
document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>'); */

// en este caso map si esta creando un nuevo arreglo a partir del pasado, en el ejercio anterior no lo creaba
/* let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');

frutas2.push('pera');
document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>'); */

// INCLUIDES sólo es para saber si agrego un dato
document.write('<br>' + numeros.includes(45) + '<br/>')

let numerosPares= numeros.filter((elemento) =>{
    return elemento % 2 == 0;
}); // Estamos filtrando si el elemento dividido entre 2 tiene un residuo de 0 los va agregar al nuevo arreglo que va a crear 

document.write('<br>' + numerosPares + '<br/>');

let frutas = ['Mango', 'Uva', 'Piña', 'Sandia', 'Aguacate'];

let frutasFiltro = frutas.filter((fruta) => {
        return fruta.toLowerCase().includes('m');
}); // filtra las frutras que llevan i, toLowerCase convierte las letras en minusculas toUppercase para mayusculas

document.write('<br>' + frutasFiltro + '<br/>');

// SORT
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7];

document.write('<br>' + otrosNumeros.sort() + '<br/>');

// REVERSE, invierte el orden de los elementos de un arreglo
document.write('<br>' + numeros.reverse() + '<br/>');

// Find, obtiene el primer elemento que cumpla con la condición
let frutaEncontrada = frutasFiltro.find ((elemento) => {
    return elemento.toLocaleLowerCase().includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br/>');
