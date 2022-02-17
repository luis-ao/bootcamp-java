CREATE SCHEMA tienda;

CREATE DATABASE Nombre; -- Crea una base de datos o esquema

USE tienda; -- Selecionar una base de datos

/*
comentario 
multilínea
*/
-- Comentario de una sola línea

DROP SCHEMA nombre; -- Elimina la base de datos o esquema

-- crear una tabla 
CREATE TABLE Productos(id int NOT NULL auto_increment, primary key (id));

/*
Para crear una tabla debmos agregar al menos una columna
*/

-- agregar columna
ALTER TABLE productos ADD COLUMN nombre varchar(255) NOT NULL;
ALTER TABLE productos ADD COLUMN precio int not NULL AFTER id;

-- Renombrar tabla
ALTER TABLE productos RENAME inventario;

-- Mostrar las tablas en una base de datos, debe seleccionarse nts con "USE" 
SHOW TABLES;

-- Eliminar una tabla
DROP TABLE inventario;

CREATE TABLE productos(id int NOT NULL auto_increment, primary key (id));
ALTER TABLE productos ADD COLUMN nombre VARCHAR(255) NOT NULL;

-- cambiar nombre y tipo de valor
ALTER TABLE productos CHANGE COLUMN nombre percio INT NOT NULL;

-- borrar columna
ALTER TABLE productos DROP COLUMN precio;
