import { sumar, multiplicar, mostrarResultado } from "./calculadora.js";

let resultado = sumar (10, 20);
console.log(resultado);

let resultadoMultiplicar = multiplicar(12, 46);

mostrarResultado("multiplicacion", 12, 46, resultadoMultiplicar);