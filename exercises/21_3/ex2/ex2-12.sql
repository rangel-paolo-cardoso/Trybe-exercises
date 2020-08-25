SELECT Emp.Name, Emp.LastName
FROM betrybe.Employees AS Emp
JOIN betrybe.Departments AS Dep
ON Emp.Department = Dep.Code
WHERE Dep.Budget > 60000;
