let nombre = 'Luis Arlacon';
let edad = 26;
let tienestrabajo = true;
let variableNull = null;
let varialbeundefined;

console.log(typeof(nombre)); //Strings o cadenas
console.log(typeof(edad)); // Number
console.log(typeof(tienestrabajo)); //Boolean
console.log(typeof(variableNull));
console.log(typeof(varialbeundefined));

console.log(variableNull === varialbeundefined);

/* === Operador estricto; a parte de comparar valores, compara si son el mismo tipo de datos*/
console.log('1' === 1);

let numero = 10;
console.log(numero.toString());