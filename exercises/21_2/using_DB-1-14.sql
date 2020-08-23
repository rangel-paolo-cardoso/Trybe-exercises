SELECT
  ManuFacters.Name,
  AVG(Products.Price) AS media_de_preco
FROM praticando.Manufacturers AS ManuFacters
JOIN praticando.Products AS Products
ON ManuFacters.Code = Products.Manufacturer
GROUP BY ManuFacters.Name
HAVING media_de_preco >= 150;
