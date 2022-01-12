/*
se utiliza para tomar decisiones 
dentro de nuestro programa

EJEMPLO 1
let edad2 = 10;

if(edad2 >= 18) {
    document.write("Eres mayor de edad, puedes votar");
}
else {
    document.write("Lo siento eres menor de edad y no puedes votar");
}

EJEMPLO 2
let edad = parseInt(prompt("¿Cuál es tu edad?"));

if(edad >= 18) {
    document.write("Eres mayor de edad, puedes votar :)");
}
else {
    document.write("Lo siento eres menor de edad y no puedes votar :(");
} */

// EJERCICIO
let edad = parseInt(prompt("¿Cuál es tu edad?"));

if(edad >= 18 && edad < 30) {
    document.write("Eres un joven");
}
else if(edad >= 30 && edad < 60) {
    document.write("Eres un adulto");
}
else if(edad >= 60) {
    document.write("Eres un adulto mayor");
}  
else {
    document.write("Eres un niño");
}    


