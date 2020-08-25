SELECT
  WH.Code AS 'Warehouse Code',
  COUNT(BX.Code) AS 'Box''s Code'
FROM betrybe.Warehouses AS WH
JOIN betrybe.Boxes AS BX
ON WH.Code = BX.Warehouse
GROUP BY WH.Code;
