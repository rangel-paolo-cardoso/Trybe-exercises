SELECT
  M.name AS Fabricante,
  P.Name AS `Nome do produto`,
  P.price AS `Preço do Produto`
FROM Manufacturers M
INNER JOIN Products P ON P.Manufacturer = M.Code
ORDER BY `Preço do Produto` DESC
LIMIT 1;
