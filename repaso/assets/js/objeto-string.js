let cadena1 = 'hola';
console.log(cadena1);

let cadena2 = new String('Adiós'); // aquí creamos un objeto string
console.log(cadena2);

// Includes() busca una cadena en otra y regresa tru o false 
console.log(cadena2.toLowerCase().includes('a'));
console.log(cadena2.toLowerCase());
console.log(cadena2.toLowerCase());

// Cohersión y conversión
// Conersion - JavaScript convierte en automatico un tipo de dato en otro
console.log(cadena1.toLocaleLowerCase());

//split() separará cada carácter de una cadena y lo convertirá en un array.
//reverse() tomará esa matriz e invertirá los elementos dentro de ella.
//join() unirá los caracteres que han sido invertidos por la función reverse().

let palabra = 'Hola Mundo'
let arreglo = palabra.split('');
console.log(arreglo);

console.log(arreglo.reverse().join())

function invertidaPalabra(cadena){
    let arreglo = cadena.split(''); //convirtiendo la cadena en un arreglo
    arreglo.reverse(); // Invirtiendo el arreglo
    let cadenaInvertida = arreglo.join('');
    return console.log(cadenaInvertida);
}

invertidaPalabra('Generation')

// Ejercicio 
function inverso(rev){
    return rev.split('').reverse().join('');
}

var rev2 = inverso('Luis')
console.log(rev2)

