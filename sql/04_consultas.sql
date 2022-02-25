USE sakila;

-- Selecciona todas las peliculas que tienen la categoría drama
SELECT * FROM film_category WHERE category_id = 7;

-- obtener los datos de una pelicula de una categoría (sub consultas)
SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id = 7 );

-- obtener una pelicula donde haya particiado un actor
SELECT film_id FROM film_actor WHERE actor_id = 4;
SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_actor WHERE actor_id = 126 );

-- Between nos permite seleccionar un rango de valores
SELECT * FROM actor WHERE actor_id BETWEEN 16 AND 34; -- escoge el rango entre 16 y 34

SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_actor WHERE actor_id IN (SELECT actor_id FROM actor WHERE first_name = 'RITA' AND last_name = 'REYNOLDS'));

