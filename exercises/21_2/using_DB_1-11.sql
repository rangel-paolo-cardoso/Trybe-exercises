SELECT
  products.name,
  products.price,
  manufacturers.name
FROM praticando.Products AS products
JOIN praticando.Manufacturers AS manufacturers
ON products.Manufacturer = manufacturers.Code;
