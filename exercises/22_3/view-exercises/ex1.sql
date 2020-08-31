CREATE VIEW film_with_categories AS
  SELECT
    f.title,
    fc.category_id,
    cat.name
  FROM film AS f
  INNER JOIN film_category AS fc
  ON f.film_id = fc.film_id
  INNER JOIN category AS cat
  ON fc.category_id = cat.category_id
  ORDER BY f.title ASC;
