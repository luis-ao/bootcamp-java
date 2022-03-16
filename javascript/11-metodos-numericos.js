var numero = "10.30";

// cambiar de texto a número "Number" y respetar sus decimales 
console.log(typeof numero, typeof Number(numero), numero);

// cambiar a número entero
console.log(parseInt(numero));

// respetar decimales
console.log(parseFloat(numero))

// preguntar si es un numero
console.log(isNaN(numero));

// Preguntar si el valor que agregamos es o no un número entero (Necesitamos forzosamente de number, en los otros no)
console.log(Number.isInteger(numero));

/* Metodos disponibles si almacenacenamos directamente un número */
var numero2 = 2.5;

// Para procesar el número como cadena de texto
console.log(typeof numero2.toString(), numero2);

console.log(numero2.toExponential(4));

console.log(numero2.toFixed(2));

console.log(numero2.toPrecision(6));







