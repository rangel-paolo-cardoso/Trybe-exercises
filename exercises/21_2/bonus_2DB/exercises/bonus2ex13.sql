SELECT * FROM Departments
WHERE Budget > (
  SELECT AVG(Budget) FROM Departments
);
