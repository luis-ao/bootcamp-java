/* const numero = [5]; */

/* Segunda manera de realizarlo, recordando que los datos pueden ir dentro del parentecis */
let numeros = new Array();
numeros = [8, 19, 453, 95, 873, 13];

/* la variable que vamos inicializar puede tener cualquier nombre pero muchas veces la encontramos con i 
.length podemos obtener el tamaño de nuestro arreglo para que el ciclo se detenga una vez que llega al nuúmero de datos en el arreglo.
"i ++"" es avreviatura de "i = i + 1" y podemos ir cambiando de 2 en 2 o 3 en 3 */
for(let i = 0; i < numeros.length; i++) {
    document.write(`${numeros[i]} <br/>`)
}