SET SQL_SAFE_UPDATES = 0;

DELETE FROM betrybe.Employees AS Emp
WHERE Emp.Department IN (
  SELECT Dep.Code FROM betrybe.Departments AS Dep
  WHERE Dep.Budget >= 60000
);
