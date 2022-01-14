/* Operadores aritmticos
+  / * % () */

/* Jerarquia de operadores, primeo se ejecuta lo que esta en el parentesis y luego el resto */
let operaciones = 3 * 5 + (10 - 5);
console.log(operaciones);

let operaciones2 = 3 - 5 /2 * 4;
console.log(operaciones2);

/* Operadores relacioneles
< > >= <= == === != !== */
console.log(7 < 7); // devuelve un false por que no le asignamos el =
console.log(7 <= 7); // devuelve un true por que le asignamos el =

console.log(7 == "7");// devuelve un false por que esta comparando valores y no tios de datos
console.log(7 === "7"); // devuelve un false por que compara valores y tipo de datos

console.log(7 != "7") // da false por lo mismo que el ejercicio anterios
console.log(7 !== "7") // da true

/* INCREMENTO y DECREMENTO
+= -= *= /= */

let incremento = 5;
incremento += 5;
// incremento = incremento + 5;
console.log(incremento);

incremento -= 5;
console.log (incremento)

incremento *= 5;
console.log(incremento);

incremento /= 5;
console.log(incremento);

/* OPERADOR UNARIO
++ (sumar 1) --(restar 1) */

let sumar = 0;
console.log(sumar + " linea 43"); // acá aún no aplica la suma
sumar++;
console.log(sumar + " linea 45");
sumar --;
sumar --;
console.log(sumar)

/* primero se inicia el fort, luego se ejecuta la función y al final el operador unario por su jerarquia */
for(let i = 0; i < 10; i++){
    //código, hasta aca se ejecuta el ciclo, regresa a ejecutar for y ahora si ++
}

let num = 5;
console.log(num++); // Posincremento, aquí no suma 1
console.log(++num); // Preincremnto, si hace la suma

for(let i = 0; i < 5; i++){
    // iteracion es cuando el for hace un cliclo
    // cada que hace la primer iteracion se detiene para que el for hijo pueda hacer sus iteraciones completas
    console.log("Este es el ciclo padre")
    for(let j = 0; j < 5; j++) {
        console.log("Este es el ciclo hijo")
    }
}
// tenemos que cambiar el nombre de la variable por quel for padre ya la esta utilizando