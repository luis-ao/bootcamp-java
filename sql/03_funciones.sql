/*
Funciones
*/

-- Seleccionar la película (nombre) con mayor duración
SELECT * FROM film ORDER BY length DESC LIMIT 1;

-- Obtiene la mayor duración en número o el valor
SELECT MAX(length) FROM film;

SELECT MAX(RENTAL_RATE) from film;

-- Obtener el mínimo
SELECT MIN(length) FROM film;

-- Obtener el promedio
SELECT AVG(length) FROM film;

-- Sumar para saber cuanto custa reemlezar inventario
SELECT SUM(replacement_cost) FROM film;