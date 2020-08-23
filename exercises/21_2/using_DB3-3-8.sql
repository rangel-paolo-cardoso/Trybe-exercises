SELECT
  Warehouses.Code AS 'Warehouse Code',
  COUNT(Boxes.Code) AS Boxes_QTD
FROM praticando.Warehouses AS Warehouses
JOIN praticando.Boxes AS Boxes
ON Warehouses.Code = Boxes.Warehouse
GROUP BY Warehouses.Code;
