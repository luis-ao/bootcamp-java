/* 
var es una variable global y puede 
ser llamada desde cualquier parte del código

let hace referencia a una variable local y sólo 
se puede acceder a ella desde el bloque en el que se encuentre, 
es decir afuera de { } es como si no existiera
*/

var numero = 40;
console.log(numero) // 40

if(true) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50

var texto = "Botcamp Java";
console.log(texto) // Botcamp Java

if(true) {
    let texto = "Cohorte 8";
    console.log(texto); // Cohorte 8
    let numerofavorito = 8
}

console.log(texto); // Botcamp Java
console.log(numerofavorito); // Marca error por que vive solo dentro de las llaves

/* 
const tiene la misma función que let 
se utiliza para declarar constantes
NO PUEDE CAMBIAR SUS VALORES
*/

const gravedad = 9.8;
// gravedad = 5; marcaría error en consola //

console.log(gravedad);