// Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.

let numeros = [9, 23, 2, 14, 74, 4, 8, 98, 10, 5, 73, 12, 18, 25, 18, 45, 3, 90, 12, 30];
let suma = 0;
let promedio = 0;

for(let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    promedio = suma/numeros.length;
}

document.write(`La suma de los numero es: ${suma} <br/>`);
document.write(`El promedio de los numero es: ${promedio}`);