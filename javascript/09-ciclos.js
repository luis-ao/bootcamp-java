/* Ciclos - bucles - loops

while
do while
for
*/

/*
While

let condicion = 1; - valor inicial

while(condicion){
    tu códico
    modificación a nuestro valor inicial
}
*/ 

// imprimir todos los número del 1 al 10
/* let condicion = 1; //empieza aquí

while(condicion <= 10){ // termina aquí
    console.log(condicion);
    condicion = condicion + 1; // el número que va estar sumando
}
 */
// condicion++ Se le conoce como incremento, al elemento se le suma 1
// es quivalente a condicion = condicion + 1;
// condicion-- le resta 1
/* let numero = 1;
numero++; //2
numero++; //3
numero++; //4
numero--; //3
numero--; //2
console.log(numero); */

/*
do Wile
imprimir todos los número del 1 - 10
*/

let numero = 1;

/* do {
    console.log(numero)
    numero++;
} while (numero <= 10) // primer ejecuta y luego realiza la función
 */

/* ciclo for
Utiliza un contador
 */

/* for (let control = 1;control <= 10; control++) {
  console.log("hola")  
} */

const comidas = ["Pozole", "Tacos", "Tamales", "Tortas"];

for(let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

