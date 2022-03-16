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
}
cocinar("pollo", "tomate", "arros", "frijoles", "pescado");


// Parametro SPREAD

function cocinar2(ingrediente4, ingrediente5, ingredientes6, ...otros){
    console.log("ingrediente4: ", ingrediente4); // sal
    console.log("ingrediente5: ", ingrediente5);// pimienta
    console.log("ingredientes6: ", ingredientes6); // limon
    console.log("otros: ", otros); // array chile, cebolla
}

    var ingredientesbase = ["sal", "pimienta"];
    cocinar2(...ingredientesbase, "limon", "chile", "cebolla")
// En consola ya que pusimo "..." va a mostrar lo siguiente
/* ingredientes4 = sal
ingredientes5 = pimienta
ingredientes6 = limón
otroe = array [chil, cebolla] */



/* ------------------------------------------------ */    
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
    console.log("resta ", resultado);
});

/* Funciones Arrow 

Es como almacenar una función en una variable; despúes nombramos el parametro que vamos a pasar (nombre) seguido de un ""=>"" y es aquí donde vamos a realizar la función, en este ejemplo concatenar "Hola " + nombre;
*/

var saludar1 = nombre => "Hola " + nombre;
console.log(saludar1("Susana")); // Imprime "Hola Susana"

var sumar2 = cantidad => cantidad+10;
console.log(sumar2(10)); // imprime 20

var suma3 = (dato1, dato2) => dato1 + dato2;
console.log(suma3(10, 15));// imprime 25

var suma4 = (dato1, dato2) => {
    var dato3 = 5;
    return dato1 + dato2 + dato3;
}
console.log(suma4(10, 15)); // imprime 30

var validar = () => {
    return "Validación correcta "
}
console.log(validar()); // Imrime el return si no pasamos parametro;