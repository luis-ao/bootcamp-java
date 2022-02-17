/* 
DEFINIDO (Sabemos cuantas veces se va ejecutar)
ciclo for 
Utiliza un contador de aumento o disminución

 for (let control = 0; comparador; aumento o decrementador) {
  código a ejecutar  
} */

// imprimir todos los platillos
const comidas = ["Pozole", "Tacos", "Tamales", "Tortas"];

for(let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

/*
INDEFINIDO (No sabemos cuantas veces se va ejecutar)

Ciclo While
No utiliza un contador, sólo una condición especifica

let condicion = 1; - valor inicial

while(condicion){
    códico a jecutar
    modificación a nuestro valor inicial
}
*/ 

// imprimir todos los número del 0 al 10
let condicionwhile = 0;

while(condicionwhile <= 10){ 
    console.log(condicionwhile);
    condicionwhile ++;// es quivalente a // condicionwhile += 1;
    // condicionwhile --; ejemplo para disminución
}

/* INDEFINIDO
Do While
primer ejecuta y luego pregunta la condición

do {
    código a ejecutar
    aumento o disminución
} while (comparador)
*/

// imprimir todos los número del 0 - 10
let numero = 0;

do {
    console.log(numero)
    numero++;
} while (numero <= 10);

// CONTROL DE CICLOS

// continue
var contador = 0;
var cuenta = 0;

for(contador = 0; contador<= 20; contador++){
    if (contador % 2 == 0){
        continue // va a saltarse los números que su residuo no sea igual a 0
    }
    cuenta ++;
    debugger;
}

// continue
var contador = 0;
var cuenta = 0;

for(contador = 0; contador<= 20; contador++){
    if (contador % 2 == 0){
        continue // va a saltarse los números que su residuo no sea igual a 0
    }
    cuenta ++;
    debugger;
}

// break
var contador2 = 0;
var cuenta2 = 0;

for(contador2 = 0; contador2<= 20; contador2++){
    if (contador2 == 5){
        break // una vez que valga 5 se cierra el ciclo
    }
    if (contador2 % 2 == 0){
        continue
    }
    cuenta2 ++;
    debugger;
}




