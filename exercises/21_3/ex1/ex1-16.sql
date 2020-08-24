SELECT
  ManuFaters.name AS 'Manufacturer''s name',
  Products.Name AS 'Product name',
  MAX(Products.Price) AS Price
FROM betrybe.Manufacturers AS ManuFaters, betrybe.Products AS Products
GROUP BY ManuFaters.name,  Products.Name;
-- Eu tentei, mas ainda não consegui.
