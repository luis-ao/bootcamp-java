/* Arrow Funtion o funciones de flecha; son una manera diferente de declarar funciones 

IMPORTANTE: Antes de ser usadas, deben ser declaradas */ 

/* Equivalente del arrow de abajo
function sumar(numero1 , numero2){
    return numero1 + numero2;
} */
 
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let suma = sumar(numero1, numero2)

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);