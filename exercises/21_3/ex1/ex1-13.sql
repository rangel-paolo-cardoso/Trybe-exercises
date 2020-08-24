SELECT
  ManuFacts.Name AS 'Manufacturer''s name',
  AVG(Products.Price) AS 'Average Price of Manufacturer'
FROM betrybe.Products AS Products
INNER JOIN betrybe.Manufacturers AS ManuFacts
ON Products.Manufacturer = ManuFacts.Code
GROUP BY ManuFacts.Code;
