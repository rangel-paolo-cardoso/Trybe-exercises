SELECT
  BX.Code AS 'Box Code',
  WH.Location
FROM betrybe.Boxes AS BX
JOIN betrybe.Warehouses AS WH
ON BX.Warehouse = WH.Code;
