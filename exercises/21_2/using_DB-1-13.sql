SELECT
  ManuFacters.Name,
  AVG(Products.Price)
FROM praticando.Products AS Products
JOIN praticando.Manufacturers AS ManuFacters
ON Products.Manufacturer = ManuFacters.Code
GROUP BY Products.Manufacturer;
