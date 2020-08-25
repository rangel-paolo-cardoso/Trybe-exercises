SELECT
  BX.Code AS 'Box''s Code of Chicago'
FROM betrybe.Boxes AS BX
JOIN betrybe.Warehouses AS WH
ON BX.Warehouse = WH.Code
WHERE WH.Location = 'Chicago';
