/* Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
cupón equivocado */

let precio = parseInt(prompt('Cuánto cuesta?'));
let cupon = prompt('Que tipo de cupon tienes?');

switch(cupon){
    case 'Bronce':
        console.log(`El precio del producto es ${precio}, tienes un cupon tipo ${cupon}, tu precio fina el ${precio*0.95}`)
        break;
    case 'Plata':
        console.log(`El precio del producto es ${precio}, tienes un cupon tipo ${cupon}, tu precio fina el ${precio*0.90}`)
        break;
    case 'Oro':
        console.log(`El precio del producto es ${precio}, tienes un cupon tipo ${cupon}, tu precio fina el ${precio*0.80}`)
        break;
    case 'Platino':
        console.log(`El precio del producto es ${precio}, tienes un cupon tipo ${cupon}, tu precio fina el ${precio*0.75}`)
        break;
    default:
        console.log('Cupón erróneo');
        break;
}
