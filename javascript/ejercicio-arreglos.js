/* Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado' */

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = []

numeros.forEach(function(el){
    resultado.push(el * 2)
})

resultado.forEach(function(elemento){
    console.log(elemento)
})

// OTRO CAMINO
const numeros2 = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
const resultado2 = []

for(let i = 0; i < numeros.length; i++){
    let multiplicacion = numeros[i]*2
    resultado.push(multiplicacion)
    console.log(resultado[i])
} 

console.log(resultado)