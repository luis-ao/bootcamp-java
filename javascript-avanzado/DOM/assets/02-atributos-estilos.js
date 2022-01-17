let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
// $texto.style = 'color: red; font-siz: 24px';
// en lugar de ponerle un estilo como en la lína anterior, agregamos una clase desde una hoja de estilos
texto.className = 'bg-purple h3'; // remplaza todo el estilo
$texto.classList.add('text-center'); // agrega al estilo

// $texto.className = 'h3'; se puede eliminar clases así ya que la sobre escribe  

// remover clases de forma selectiva
$texto.classList.remove('bg-purple');
