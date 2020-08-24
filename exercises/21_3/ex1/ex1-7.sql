SELECT name, AVG(price) AS 'Preço médio'
FROM betrybe.Products
WHERE Manufacturer = 2
GROUP BY name;
