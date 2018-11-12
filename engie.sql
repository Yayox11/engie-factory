CREATE DATABASE IF NOT EXISTS `engie`;

CREATE TABLE `autos` (

	`id_auto` int NOT NULL AUTO_INCREMENT,

	`marca` varchar(255) NOT NULL,

	`modelo` varchar(255) NOT NULL,

	`anio` int NOT NULL,
	PRIMARY KEY (`id_auto`)

);



CREATE TABLE `clientes` (

	`id_cliente` int NOT NULL AUTO_INCREMENT,
	
	`nombre` varchar(255) NOT NULL,

	`rut` varchar(255) NOT NULL,

	`auto_id` int NOT NULL,

	PRIMARY KEY (`id_cliente`)

);



ALTER TABLE `clientes` ADD CONSTRAINT `clientes_fk0` FOREIGN KEY (`auto_id`) REFERENCES `autos`(`id_auto`) ON UPDATE CASCADE ON DELETE CASCADE;


INSERT INTO `autos` VALUES (1,'Fiat','300',2000),(2,'Audi','a3',2018),(3,'Subaru','Impreza',2017);
INSERT INTO `clientes` VALUES (1,'12.344.221-3','Pedro',1),(2,'19.837.485-9','Claudio',1),(3,'17.361.563-3','Martin',2);