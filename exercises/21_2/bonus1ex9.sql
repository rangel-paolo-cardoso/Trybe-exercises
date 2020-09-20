SELECT
  name,
  price
FROM Products
WHERE price >= 180
ORDER BY price DESC, name ASC;
