// Flujo orden en que se ejecutan las declaraciones

let edad = 17;
let tienesINE = true;

if(edad >= 18 && tienesINE == true){
    console.log('Puedes entrar');
}
else {
    console.log('No puedes entrar')
}

/* OPERADOR TERNARIO
(condicio a evaluar) ? se ejcuta si es verdadero : se ejecuta si es falso, se le nombra ternario por que consta de 3 partes */

let edad1 = 17;

(edad1 >= 18)
    ? console.log('Mayor de edad')
    : console.log('Menor de edad')

// Se puede guardar dentro de una variable

let pregunta = (edad1 >= 18)
    ? 'Mayor de edad'
    : 'Menor de edad'

console.log(pregunta);

// Otra forma de realizar
let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? 'Mayor' : 'Menor'} de edad`;

console.log(preguntaEdad)

/* Forma compleja de hacerlo
Domingo - 0
Lunes - 1
Martes - 2
Miércoles - 3
Jueves - 4
Viernes -5
Sábado - 6 */

/* let dia =5;

if (dia === 0){
    console.log('Domingo');
}
else if (dia === 1){
    console.log('Lunes')
}
else if (dia === 2){
    console.log('Martes')
}
else if (dia === 3){
    console.log('Mércoles')
}
else if (dia === 4){
    console.log('Jueves')
}
else if (dia === 5){
    console.log('Viernes')
}
else if (dia === 6){
    console.log('Sábado')
}
else {
    console.log('Este no es un día')
}

Switch - case
Switch(variable a evaluar){
    case valor:
        -codigo a ejecutar-
    break;
    case valor:
        -codigo a ejecutar-
    break;
    default:
        -codigo a ejecutar si sale de las opciones-
    break;

break: detiene el codigo en el momento que un valor coincida
} */

let dia = 5;
switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('No es un día valido');
        break;
}

let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento){
    case 'Bronce':
        descuento = 5;
        break;
    case 'Plata':
        descuento = 10;
        break;
    case 'Oro':
        descuento = 15;
        break;
    default:
        console.log('Cupón erróneo');
        break;
}

console.log(descuento)