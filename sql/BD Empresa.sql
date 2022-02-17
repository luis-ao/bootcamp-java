CREATE SCHEMA bd_empresa;
USE bd_empresa;

CREATE TABLE worker (id INT NOT NULL auto_increment, primary key(id));
ALTER TABLE worker ADD COLUMN FIRTS_NAME VARCHAR(255) NOT NULL;
ALTER TABLE worker ADD COLUMN LAST_NAME VARCHAR(255) NOT NULL;
ALTER TABLE worker ADD COLUMN SALARY INT NOT NULL;
ALTER TABLE worker ADD COLUMN START_DATE DATE NOT NULL;
ALTER TABLE worker ADD COLUMN DEPARTMENT VARCHAR(255) NOT NULL;

INSERT INTO worker(FIRTS_NAME, LAST_NAME, SALARY, START_DATE, DEPARTMENT) values
('Monika', 'Arora', 100000, '2014-02-20', 'HR'),
('Santiago', 'Carillo', 80000, '2014-06-11', 'Admin'),
('Ian', 'Smith', 300000, '2014-02-20', 'HR'),
('Boyd', 'Mdonga', 500000, '2014-02-20', 'Admin'),
('Vivek', 'Bhati', 500000, '2014-06-11', 'Admin'),
('Elise', 'Guimares', 200000, '2014-06-11', 'Account'),
('Barrack', 'Obama', 75000, '2014-01-20', 'Account'),
('Vivian', 'Muyu', 90000, '2014-04-11', 'Admin');

CREATE TABLE bonus (id INT NOT NULL auto_increment, primary key(id));
ALTER TABLE bonus ADD COLUMN BONUS_DATE DATE NOT NULL;
ALTER TABLE bonus ADD COLUMN BONUS_AMOUNT INT NOT NULL;

INSERT INTO bonus(BONUS_DATE, BONUS_AMOUNT) values
('2016-02-20', 5000),
('2016-06-11', 3000),
('2016-02-20', 4000),
('2016-02-20', 4500),
('2016-06-11', 3500);

CREATE TABLE title (id INT NOT NULL auto_increment, primary key(id));
ALTER TABLE title ADD COLUMN JOB_TITLE VARCHAR(255) NOT NULL;
ALTER TABLE title ADD COLUMN AFFECTED_FROM INT NOT NULL;

INSERT INTO title(JOB_TITLE, AFFECTED_FROM) values
('Manager', 5000),
('Executive', 3000),
('Executive', 4000),
('Manager', 4500),
('Asst. Manager', 3500),
('Executive', 4000),
('Lead', 4500),
('Manager', 3500);

