DELETE FROM Boxes
WHERE Warehouse IN (
  SELECT Code
  FROM Warehouses
  WHERE Capacity < (
    SELECT COUNT(*)
    FROM Boxes
    WHERE Warehouse = Warehouses.Code
  )
);
-- tentei, mas nçao deu certo de jeito nenhum.
