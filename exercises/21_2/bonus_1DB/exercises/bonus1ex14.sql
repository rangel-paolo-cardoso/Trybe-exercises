SELECT
  M.name AS Fabricante,
  ROUND(AVG(P.Price), 2) AS 'Preço médio'
FROM Manufacturers M
INNER JOIN Products P ON M.Code = P.Manufacturer
GROUP BY Fabricante
HAVING AVG(price) >= 150;
