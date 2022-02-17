/* Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.
 */

function descuento(valorcompra)
{
    let valorfinal;
    if (valorcompra < 100)
    {
        valorfinal = valorcompra * 0.9;    
    }
    else if (valorcompra>=100 && valorcompra<200)
    {
        valorfinal = valorcompra * 0.8;
    }

    else 
    {
        valorfinal = valorcompra * 0.7;
    }
    return valorfinal; // return es necesario para poder usar la variable lef fuera del bloque de código
}

let preciousuario = parseInt(prompt("Ingresa el precio"));
let descuento1 = descuento(preciousuario);

document.write("<h1>" + "El precio del producto es " + preciousuario + "</h1>");
document.write("<h1>" + "El precio final es " + descuento1 + "</h1>");


