SELECT *
FROM betrybe.Departments
WHERE Budget > (
  SELECT AVG(Budget) FROM betrybe.Departments
);
