SELECT
  ManuFacts.Name AS 'Manufacturer''s name',
  AVG(Products.Price) AS 'Average price greather then or equal $150'
FROM betrybe.Products AS Products
INNER JOIN betrybe.Manufacturers AS ManuFacts
ON Products.Manufacturer = ManuFacts.Code
GROUP BY ManuFacts.Name
HAVING AVG(Products.Price) >= 150;
