SELECT
  Manufacturer,
  AVG(Price)
FROM praticando.Products
GROUP BY Manufacturer;
