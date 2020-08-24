SELECT name, CONCAT('R$ ', price) AS price
FROM betrybe.Products
WHERE price >= 180
ORDER BY price DESC, name ASC;
