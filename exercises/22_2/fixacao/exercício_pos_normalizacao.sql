-- exercício 1
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE funcionario (
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL,
  telefone VARCHAR(16) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE setor_de_trabalho (
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  setor VARCHAR(100) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE `historico_funcionario` (
  `historico_id` int NOT NULL AUTO_INCREMENT,
  `data_cadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `setor_id` int NOT NULL,
  `funcionario_id` int NOT NULL,
  PRIMARY KEY (`historico_id`),
  KEY `fk_historico_funcionario_setor_idx` (`setor_id`),
  KEY `fk_historico_funcionario_id_idx` (`funcionario_id`),
  CONSTRAINT `fk_historico_funcionario_id` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`funcionario_id`),
  CONSTRAINT `fk_historico_funcionario_setor` FOREIGN KEY (`setor_id`) REFERENCES `setor_de_trabalho` (`setor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO funcionario (nome, sobrenome, email, telefone)
VALUES
('Joseph', 'Rodrigues',	'jo@gmail.com',	'(35)998552-1445'),
('André', 'Freeman', 'andre1990@gmail.com',	'(47)99522-4996'),
('Cíntia', 'Duval',	'cindy@outlook.com', '(33)99855-4669'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556');

INSERT INTO setor_de_trabalho (setor)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO `historico_funcionario`
VALUES
(1,'2020-08-28 23:32:09',1,1),
(2,'2020-08-28 23:32:09',2,1),
(3,'2020-08-28 23:34:37',3,2),
(4,'2020-08-28 23:34:37',4,3),
(5,'2020-08-28 23:34:37',2,3),
(6,'2020-08-28 23:34:37',5,4);
