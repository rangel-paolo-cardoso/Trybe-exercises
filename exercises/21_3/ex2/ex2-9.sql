SELECT
  Dep.Code AS 'Department Code',
  COUNT(Emp.SSN) AS 'Quantity of Employees'
FROM betrybe.Departments AS Dep
JOIN betrybe.Employees AS Emp
ON Dep.Code = Emp.Department
GROUP BY Dep.Code;
