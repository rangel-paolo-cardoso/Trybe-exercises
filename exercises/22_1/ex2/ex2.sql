CREATE SCHEMA IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE gerente (
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(150) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidador (
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(150) NOT NULL,
  idade INT NOT NULL,
  gerente_id INT NOT NULL,
  CONSTRAINT `fk_gerente_id` FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal (
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  especie VARCHAR(150) NOT NULL,
  sexo CHAR(1) NOT NULL,
  idade INT NOT NULL,
  localizacao VARCHAR(100) NOT NULL,
  cuidador_id INT NOT NULL,
  CONSTRAINT `fk_cuidador_id` FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
) ENGINE=InnoDB;
