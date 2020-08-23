SELECT
  Boxes.Code AS 'Box Code',
  Warehouses.Location
FROM praticando.Boxes AS Boxes
JOIN praticando.Warehouses AS Warehouses
ON Boxes.Warehouse = Warehouses.Code;
