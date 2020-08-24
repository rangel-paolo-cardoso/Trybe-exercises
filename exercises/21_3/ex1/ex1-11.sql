SELECT
  Products.name AS 'Product Name',
  Products.price AS 'Product Price',
  ManuFacts.name AS 'Manufacter Name'
FROM betrybe.Products AS Products
INNER JOIN betrybe.Manufacturers AS ManuFacts
ON Products.Manufacturer = ManuFacts.Code;
