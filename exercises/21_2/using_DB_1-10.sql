SELECT P.*, M.name FROM praticando.Products AS P
JOIN praticando.Manufacturers AS M
ON P.Manufacturer = M.Code;
