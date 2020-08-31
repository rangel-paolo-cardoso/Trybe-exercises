USE sakila;
CREATE VIEW film_info AS
  SELECT
    a.actor_id AS `id`,
    CONCAT(a.first_name, ' ', a.last_name) AS `actor`,
    f.title
  FROM film_actor AS fa
  INNER JOIN actor AS a ON a.actor_id = fa.actor_id
  INNER JOIN film AS f ON fa.film_id = f.film_id
  ORDER BY `actor`;
