/*
crear una BD llamada tienda_abarrotes
productos
clientes
proveedores

c/tablas 5 columnas
*/

CREATE DATABASE tienda_abarrotes;

USE tienda_abarrotes;

CREATE TABLE productos (id INT NOT NULL auto_increment, primary key (id));
ALTER TABLE productos ADD COLUMN nombre varchar(255) NOT NULL;
ALTER TABLE productos ADD COLUMN precio int not NULL AFTER id;
ALTER TABLE productos ADD COLUMN tipo varchar(255) NOT NULL;
ALTER TABLE productos ADD COLUMN descuento int not NULL AFTER id;

CREATE TABLE clientes (id INT NOT NULL auto_increment, primary key (id));
ALTER TABLE clientes ADD COLUMN nombre varchar(255) NOT NULL;
ALTER TABLE clientes ADD COLUMN apellido varchar(255) NOT NULL;
ALTER TABLE clientes ADD COLUMN cantidad_gastada int not NULL AFTER id;
ALTER TABLE clientes ADD COLUMN cantidad_ahorrada int not NULL AFTER id;

CREATE TABLE provedores (id INT NOT NULL auto_increment, primary key (id));
ALTER TABLE provedores ADD COLUMN nombre varchar(255) NOT NULL;
ALTER TABLE provedores ADD COLUMN apellido varchar(255) NOT NULL;
ALTER TABLE provedores ADD COLUMN empresa varchar(255) NOT NULL;
ALTER TABLE provedores ADD COLUMN cantidad_comprado int not NULL AFTER id;





