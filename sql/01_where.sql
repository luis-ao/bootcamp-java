/*
Where nos permite obtener valores a travez de un campo especifico
*/
-- Obtiene toda la información 
SELECT * FROM actor;

/*
Operadores de comparación
OPERADORES DE COMPARACION:
Igual           =
Distinto        !=
Menor           <
Mayor           >
Menor o igual   <=
Mayor o igual   >=
Entre           between A and B
En              in
Es nulo         is null
No nulo         is not null
Como            like
No es como      not like
*/

-- Selecciona de la tabla actor todas las personas que se llamen Penelope
SELECT * FROM actor WHERE first_name = 'Penelope';

-- Selecciona de la tabla actor todas las personas que no se llamen Penelope
SELECT * FROM actor WHERE first_name != 'Penelope';

-- Selecciona mayor que 50
SELECT * FROM film WHERE film_id > 50;

-- Selecciona menor que 50
SELECT * FROM film WHERE film_id < 50;

-- Selecciona de la tabla customer todo los id que sean par 
SELECT * FROM customer WHERE customer_id % 2=0;

-- Filtra los datos con valor númerico 2.99 y texto PG-13
SELECT * FROM film WHERE rental_rate = 2.99 AND rating = 'PG-13';

-- Todos los actores que terminen en "e"
SELECT * FROM actor WHERE first_name LIKE '%e';

-- Todos los actores que empiezan con "an"
SELECT * FROM actor WHERE first_name LIKE 'an%';

-- Todos los actores que su apellido contenda una "n" no importa la ubicación
SELECT * FROM actor WHERE last_name LIKE '%n%';

SELECT * FROM actor WHERE first_name LIKE '%n%' OR last_name LIKE '%b%';

-- Selcciona de la tabla actor todas las personas cuyo first_name contenga un caracter en medio K_caracter_r
SELECT * FROM actor WHERE first_name LIKE '%_r%';