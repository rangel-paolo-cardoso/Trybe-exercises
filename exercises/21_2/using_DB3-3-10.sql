SELECT
  Boxes.Code
FROM praticando.Boxes AS Boxes
JOIN praticando.Warehouses AS WHouse
ON Boxes.Warehouse = WHouse.Code
WHERE WHouse.Location = 'Chicago';
