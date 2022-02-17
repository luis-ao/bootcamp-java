/*
se utilizan para tomar decisiones dentro de nuestro programa */

// Solamente usar si no se requiere más de una decisión en el algoritmo

var dato1 = 10;
var dato2 = 20;

var resultado3 = dato1 > dato2 ? "si es mayor" : "no es mayor";

console.log(resultado3);

// EJEMPLO 1
let edad2 = 10;

if (edad2 >= 18) {
    document.write("Eres mayor de edad, puedes votar");
}
else {
    document.write("Lo siento eres menor de edad y no puedes votar");
}

// EJEMPLO 2
let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 18) {
    document.write("Eres mayor de edad, puedes votar :)");
}
else {
    document.write("Lo siento eres menor de edad y no puedes votar :(");
}

// EJERCICIO
let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 18 && edad < 30) {
    document.write("Eres un joven");
}
else if (edad >= 30 && edad < 60) {
    document.write("Eres un adulto");
}
else if (edad >= 60) {
    document.write("Eres un adulto mayor");
}
else {
    document.write("Eres un niño");
}

// ANIDAR CONDICIONES
var datoA = 20;
var datoB = 10;
var datoC = 5;

if (datoA > datoB) {
    resultado = "La condición se cumplio";

    if (datoC < datoB) {
        resultado = "evaluación anidada correcta"; // este es el resultado
    }
    else {
        resultado = "No se cumplio evaluación anidada"
    }
}
else {
    resultado = "No se cumplio evaluación"
}

// SWITCH
var edad3 = 30;

switch (edad3) {
    case 10:
        resultado = "La edad es 10 años";
        break;
    case 20:
        resultado = "La edad es 20 años";
        break;
    case 30:
        resultado = "La edad es 30 años";
        break;
    default:
        resultado = "Dato no valido"
        break;
}
console.log(resultado)

// STRINGS, switch es sencible a las minusculas y mayusculas
var producto = "Tv";
switch (edad3) {
    case "Tv":
        resultado2 = "se eligio Tv";
        break;
    case "Radio":
        resultado2 = "se eligio Radio";
        break;
    default:
        resultado2 = "Ninguna opción"
        break;
}
console.log(resultado2)