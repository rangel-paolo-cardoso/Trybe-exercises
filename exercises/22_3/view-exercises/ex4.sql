USE sakila;
CREATE VIEW movies_languages AS
  SELECT
    f.title,
    l.language_id,
    l.name
  FROM film AS f
  INNER JOIN language AS l ON f.language_id = l.language_id;
