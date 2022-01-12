/* Function
Es un bloque de código reutilizable que puede tener o no parametros de entrada y pueden devolver o no un valor */

function sumar(numero1 , numero2){
    // Operaciones o código a ejecutar

    return numero1 + numero2;
    console.log('Hola desde la función'); // no lo realiza por que devía ir antes de return
    
    /* Si queremos devolver un valor debemos usar el parametro return y deber ser el último que se declara dentro de la función, esto nos permite rescatarlo fuera de la función*/
}

// 8 == (5,3)

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let suma = sumar(numero1, numero2)
// Aquí suma esta recuperando el valor de sumar

// Template string representa la cadena
// ` es necesario escribirla con backstick o comilla invertida

// Practicidad
document.write(`La suma de ${numero1} y ${numero2} es ${suma} </br>`);

// Concatenando
document.write('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma);
