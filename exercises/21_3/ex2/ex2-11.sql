SELECT
  Emp.Name,
  Emp.LastName,
  Dep.Name,
  Dep.Budget
FROM betrybe.Employees AS Emp
JOIN betrybe.Departments AS Dep
ON Emp.Department = Dep.Code;
