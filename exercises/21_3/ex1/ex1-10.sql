SELECT * FROM betrybe.Products AS Products
INNER JOIN betrybe.Manufacturers AS ManuFacts
ON Products.Manufacturer = ManuFacts.Code;
