SELECT
  Emp.Name,
  Emp.LastName
FROM betrybe.Employees AS Emp
JOIN betrybe.Departments AS Dep
ON Emp.Department = Dep.Code
WHERE Dep.Code = (
  SELECT two_low_dep.Code
  FROM (SELECT * FROM betrybe.Departments AS D ORDER BY D.Budget LIMIT 2) AS two_low_dep
  ORDER BY two_low_dep.Budget DESC LIMIT 1
);
