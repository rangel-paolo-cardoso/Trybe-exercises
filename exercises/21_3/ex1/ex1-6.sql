SELECT name, AVG(price) AS 'Preço médio'
FROM betrybe.Products
GROUP BY name;
