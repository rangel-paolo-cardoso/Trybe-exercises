SELECT
  name,
  price * 100 AS `price in cents`
FROM Products
WHERE price BETWEEN 60 AND 120;
