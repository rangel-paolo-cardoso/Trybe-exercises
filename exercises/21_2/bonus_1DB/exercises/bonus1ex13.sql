SELECT
  M.Name AS Fabricante,
  ROUND(AVG(P.Price), 2) AS 'Preço Médio'
FROM Products P
INNER JOIN Manufacturers M
ON P.Manufacturer = M.Code
GROUP BY Fabricante;
