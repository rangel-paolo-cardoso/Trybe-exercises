CREATE SCHEMA IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artista (
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(150) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE estilomusical (
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome_estilo VARCHAR(150) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE album (
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  artista_id INT NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  preco DECIMAL(6,2) NOT NULL,
  estilo_id INT NOT NULL,
  CONSTRAINT `fk_artista_id_contraint` FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
  CONSTRAINT `fk_estilo_id_contraint` FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
)ENGINE=InnoDB;

CREATE TABLE cancao (
  cancao_id INT PRIMARY KEY AUTO_INCREMENT,
  nome_cancao VARCHAR(150) NOT NULL,
  album_id INT NOT NULL,
  CONSTRAINT `fk_album_id_contraint` FOREIGN KEY (album_id) REFERENCES album(album_id)
)ENGINE=InnoDB;
