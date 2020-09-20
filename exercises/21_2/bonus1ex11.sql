SELECT
  P.name,
  P.price,
  M.name AS Fabricante
FROM Products P
INNER JOIN Manufacturers M
ON P.Manufacturer = M.Code;
