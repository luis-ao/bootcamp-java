/* 
Las funciones sirven para escribir
bloques de código que son reutilizables
PALABRA RESERVADA después de nombre de la función
function sumar () {
    let n1 = 10;
    let n2 = 20;
    let suma = n1 + n2;
    document.write("<h1>"+ suma +"</h1>");
}
sumar();
sumar(); */

let n1 = 10;
let n2 = 20;
let suma = n1 + n2;
document.write("<h1>"+ suma +"</h1>");

let n3 = 23;
let n4 = 2132;
let suma2 = n3 + n4;
document.write("<h1>"+ suma2 +"</h1>");

// EN LUGAR DE HACER ESTO, CREAMOS UNA FUNCIÓN
function sumar (n1, n2) {
    let suma = n1 + n2;
    document.write("<h1>"+ suma +"</h1>");
}
sumar(5, 8);
sumar(23, 12);
sumar(9, 18);

