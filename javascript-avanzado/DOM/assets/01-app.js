// Usualmente a las variables de les agrega al inicio un "$" para saber que le hacemos una referencia a una variable del DOM 

/* let $titulo = document.getElementById('titulo');
$titulo.textContent = 'Titulo escrito desde JS'; */

// .querySelector, podemos acceder como en CSS .nombreClase, #id o elementos como p (recordando que el rimer p que encuentre es el que nos va devolver).
let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde JS 2';

let $parrafo = document.querySelector('p');
// console.log($parrafo.textContent);

// para traer todos los elementos usamos .querySelectorAll y los devuelve en arreglos por lo que podemos llamarlos con []
let $parrafos = document.querySelectorAll('p');
// console.log($parrafos[1].textContent);

// Crear elemento en memoria para editarlo y posteriormente insertarlo

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';
// document.body.append(subtitulo); // para insertarlo en html, recordando que lo hace al final del últmio hijo

let $contenido = document.querySelector('#contenido');
// console.log($contenido.textContent = '</br>'); // nos devuelve el texto y sólo podemos escribir texto 
// console.log($contenido.innerHTML = '</br>'); // nos devuelve todo el contenido de html, ademas de texto nos permite usar etiquetas html dentro del elemento
// console.log($contenido.outerHTML = 'hola'); // los cambios tambien se hacen al elemento que hacemos referencia en este caso el div id='contenido'

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
// $contenido.appendChild(contenidoParrafo); // aquí hacemos referencia al padre ($contenido) y lo colocamos como hijo

// trabajar directo con hermanos
$titulo.insertAdjacentElement('afterend',subtitulo);

// beforebegin antes del hermano
// beforeend despues y dentro del hermano
// afterend después del hermano

// Eliminar elemento
$titulo.remove();