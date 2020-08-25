SELECT
  WH.Code,
  AVG(BX.Value) AS Average_value
FROM betrybe.Warehouses AS WH
JOIN betrybe.Boxes AS BX
ON WH.Code = BX.Warehouse
GROUP BY WH.Code
HAVING Average_value > 150;
