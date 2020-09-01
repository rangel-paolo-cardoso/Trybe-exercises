USE sakila;
CREATE VIEW address_info AS
  SELECT
    a.address_id,
    a.address,
    a.district,
    c.city_id,
    c.city
  FROM address AS a
  INNER JOIN city AS c ON a.city_id = c.city_id
  ORDER BY c.city;
