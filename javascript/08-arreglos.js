/*
Arreglos: Son una colección de elementos (cualquier tipo de datos)
Tiene métodos o funciones que nos permite ordenar 
o manipular los datos almacnados
*/

 // manera 1/* 
const arreglo1 =[];

// manera 2
const arreglo2 = Array.of(1, "hola", true);

// manera 3
const arreglo3 = new Array(3, true, "Adiós");

// podemos colocar un arreglo dentro de otro arreglo
const arreglo4 =[3, "Hi", true, [1, 2, 3]];
console.log(arreglo4);

const arreglo5 =[8, "Bye", true, arreglo2];
console.log(arreglo5);

// Llamar a los datos guardados dentro de los arreglos
const frutas = ["manzanas", "naranjas", "uvas",
"sandías", [1, 2, 3, 4, ["1","2","3"]]];

console.log(frutas[0]); //para llamar a la manzana
console.log(frutas[2]); //para llamar a la sandía
console.log(frutas[4][4][0]); //para llamar a 1

// MÉTODOS
// length = longitud, sirve para que nos indique la cantidad de datos almacenados
const letras = ["a", "b", "c", "d"];
console.log(letras.length);

// push = añade un elemento al final de nuestro arreglo
letras.push("E")
console.log(letras)

// pop = elimina el último elemento
letras.pop()
console.log(letras)

// unshift = agrega elemento al inicio
letras.unshift(1)
console.log(letras)

// shift = elimina el primer elemento
letras.shift()
console.log(letras)

const frutas2 = ["manzanas", "naranjas", "uvas",
"sandías", [1, 2, 3, 4, ["1","2","3"]]];
console.log(frutas2);
frutas[4][4].push("D") // colocar después de ["3"]

/*
forEach - nos puede servir para realizar un acción
por cada elemento de nuestro arreglo
*/

// Por ejempo aqui llamamos a los elemento en cada línea
const comidas = ["Pozole", "Quesadillas", "Tacos"];

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])

// Aca lo sintetiza
comidas.forEach(function(el){
    console.log(el);
})

/* forEach esta sumando "1" a cada elemento, podemos guardarlo
en una variable para poder llamarlo en consola */
const numeros = [1, 2, 4, 8];
numeros.forEach(function (el){
    let suma = el + 1;
    console.log(suma)
})