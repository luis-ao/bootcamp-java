/* Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado */

let numero = 60;

function adivinar() {
    //let respuesta = parseInt(prompt("Adivina: "));
    let respuesta = parseInt(document.getElementById("numero").value);
    if (respuesta === numero) {
        document.getElementById("feedback").innerHTML = `Ganaste!`;
    } else if ((numero + 5 >= respuesta) && (numero - 5 <= respuesta)) {
        document.getElementById("feedback").innerHTML = `Calienteeeeeee`;
    } else if ((numero + 10 >= respuesta) && (numero - 10 <= respuesta)) {
        document.getElementById("feedback").innerHTML = `Caliente`;
    }
    else if ((numero + 20 >= respuesta) && (numero - 20 <= respuesta)) {
        document.getElementById("feedback").innerHTML = `Tibio`;
    } else if ((numero + 30 >= respuesta) && (numero - 30 <= respuesta)) {
        document.getElementById("feedback").innerHTML = `Frio`;
    } else {
        document.getElementById("feedback").innerHTML = `Congelado`;
    }
}



    


