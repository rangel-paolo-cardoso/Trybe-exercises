SELECT
  Warehouses.Code AS 'Warehouse Code'
FROM praticando.Warehouses AS Warehouses
WHERE Warehouses.Capacity < (
  SELECT COUNT(*)
  FROM praticando.Boxes
  WHERE Warehouses.Code = Boxes.Warehouse
);
