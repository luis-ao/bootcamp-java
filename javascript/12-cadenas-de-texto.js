var mensaje = "Hola estoy aprendiendo JavaScript y estoy aprendiendo mucho";

console.log(mensaje.length); // medir cadenada

// para los siguientes metodos debemos usarlos sobre una variable
var resultado;

// busca la posición de la primera ocurrencia que aparezca 
resultado = mensaje.indexOf ("aprendiendo"); // imprime la posición 11

// La última aprición de la palabra 
resultado = mensaje.lastIndexOf("aprendiendo"); // imprime 42

// es similar a indexOf
resultado = mensaje.search("aprendiendo");

// podemos hacer uso de expresiones regulares
resultado = mensaje.search(/ja/i); // imprime 23

// "i" lo hace incase sensitive para que no importe si usamos minuscolas o mayusculas


/* ------------ BUSCAR CARACTERES ------------------ */

resultado = mensaje.match(/aprendiendo/gi); // imprime dos arreglos de las palabras que agrego
// "g" es para que busque en toda la cadena

resultado = mensaje.substr(6, 11); // nos devuelve los carácteres entre 6 y 11

resultado = mensaje.substring(6, 17); // empieza desde 6 pero el 17 vuelve a contar desde el primer carácter

resultado = mensaje.charAt(3); // con charAt la cuenta empieza desde 0 por ell nos devuelve a

// buscar que inicie con "Es"
resultado = mensaje.startsWith("Es");// true

// preguntar si termina con cierto texto
resultado = mensaje.endsWith("JavaScript"); // true

// preguntar si incluye alguna palaba
resultado = mensaje.includes("JavaScript") // true

// repetir texto
resultado = mensaje.repeat(200); // se repite 200 veces

// reemplazar texto
resultado = mensaje.replace("JavaScript", "a programar"); // "Hola estoy aprendiendo a programar y estoy aprendiendo mucho"

// Delimitar hasta donde se muetra el mnsaje
resultado = mensaje.slice(6, mensaje.length-6);

// separar la cadena de texto en un arreglo
resultado = mensaje.split("-");// separamos con "-" para que visualmente sea má claro

// Elminar los mensaje en blanco antes y después de la cadena de texto
resultado = mensaje.trim(); 

/* ------------ TRANSFORMAR ------------------ */

var mensaje2 = "Estoy aprendiendo JavaScritp";
var mensaje3 = "y programación";

// texto a minusculas
resultado = mensaje2.toLowerCase();

// a mayusculas
resultado = mensaje2.toUpperCase();

// Concatenar dos mensajes
resultado = mensaje2.concat(mensaje3, " y tengo muchas ideas");


/* ------------ PLANTILLAS Y LITERALES ------------------ */

var lenguaje = "JavaScript";
var lenguaje2 = "HTML";

var mensaje4 = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;
// tiene que usarse backticks `

var mensajeMultilinea = `
 Hola mundo,
 estoy aprendiendo
 ${lenguaje} y
 me gusta mucho
`;

console.log(resultado);
// siempre que consola arroja -1 quiere decir que no encontró coincidencia