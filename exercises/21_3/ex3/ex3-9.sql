SELECT
  WH.Code AS 'Warehouse Code that is saturated'
FROM betrybe.Warehouses AS WH
WHERE WH.Capacity < (
  SELECT COUNT(*)
  FROM betrybe.Boxes AS BX
  WHERE BX.Warehouse = WH.Code
);
