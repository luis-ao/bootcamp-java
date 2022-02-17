/* Las funciones sirven para escribir bloques de código que son reutilizables

function nombre (parametro1, parametro2){
    código a ejecutar
}

let n1 = 10;
let n2 = 20;
let suma = n1 + n2;
document.write("<h1>" + suma + "</h1>");
*/

// EN LUGAR DE HACER ESO, CREAMOS UNA FUNCIÓN
function sumar (n1, n2) {
    let suma = n1 + n2;
    document.write("<h1>" + suma + "</h1>");
}
sumar(5, 8);
sumar(23, 12);
sumar(9, 18);

// Sobre poner valor 
function saludar( saludo = "Hola mundo"){
    console.log(saludo);
}

saludar();// nos va a arrojar "Hola mundo" por que no le dimos valor 
saludar("Que tal");// nos va a sobre escribir "que tal" 

// Parametros REST
function cocinar(ingrediente1, ingrediente2, ...masingredientes){
    console.log("ingrediente1: ", ingrediente1); // pollo
    console.log("ingrediente2: ", ingrediente2);// tomate
    console.log("masingredientes: ", masingredientes); // array [arroz, frijoles, pescado]

    cocinar("pollo", "tomate", "arros", "frijoles", "pescado"); // Se tiene que declarar dentro de la función
}

// Parametro SPREAD

function cocinar2(ingrediente4, ingrediente5, ingredientes6, ...otros){
    console.log("ingrediente4: ", ingrediente4); // sal
    console.log("ingrediente5: ", ingrediente5);// pimienta
    console.log("ingredientes6: ", ingredientes6); // limon
    console.log("otros: ", otros); // array chile, cebolla
}

    var ingredientesbase = ["sal", "pimienta"];
    cocinar2(...ingredientesbase, "limon", "chile", "cebolla") // Se puede declarar fuera de la función

/* funciones anónimas
lo podemos usar para callbacks o cuando queremos aislar de algun otro elemento */

var saludar3 = function(){
    var mensaje = "hola de nuevo";
    return mensaje;
}

/* Callbacks 
function nombre (valor1, valor2, función anonima, func2)
*/

function calcular (datoA, datoB, sumarCB, restaCB){
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarCB (suma)
    restaCB (resta)
}

calcular(2, 3, function(resultado){
    console.log("suma", resultado);
}, function(resultado){
    console.log("resta ", resultado)
});
