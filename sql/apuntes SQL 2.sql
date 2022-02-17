CREATE SCHEMA Generation;
USE Generation;

-- crear tabla
CREATE TABLE cohorte(id INT NOT NULL auto_increment, primary key(id));
ALTER TABLE cohorte ADD COLUMN nombre varchar(255) NOT NULL;
ALTER TABLE cohorte ADD COLUMN edad INT NOT NULL;

-- Agregar Datos
INSERT INTO cohorte(nombre, edad) values
("Kurt", 27),
("Ash Ketchup", 12),
("Pedro", 22); 

-- mostrar datos de una tabla
SELECT * FROM cohorte; -- Seleccionar tabla completa
SELECT * FROM world.city; -- Para mostrar una tabla que no esta seleccionada

SELECT nombre FROM cohorte; -- Seleecionar una columna
SELECT CountryCode, Population FROM world.city; -- Varias columnas

SELECT Name AS "Nombre de los Países" FROM world.city; -- Forma de agregar un alias "Es momentaneo" 

-- actualizar valores
-- UPDATE cohorte SET nombre = "Juan"; - no usamos Where corremos el riesgo de que se cambie el valor en todas las columnas

UPDATE cohorte SET
nombre = "Luis",
edad = 30
WHERE id = 4; 

-- DELETE borrar un registro o toda la columna
DELETE FROM cohorte;
/*
nunca usen DELETE sin el Where (borra toda la tabla)
*/ 

DELETE FROM cohorte WHERE edad;
DELETE FROM cohorte WHERE id=28;

