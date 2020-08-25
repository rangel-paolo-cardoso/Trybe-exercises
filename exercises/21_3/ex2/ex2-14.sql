SELECT Dep.Name
FROM betrybe.Departments AS Dep
JOIN betrybe.Employees AS Emp
ON Dep.Code = Emp.Department
GROUP BY Dep.Name
HAVING COUNT(Emp.SSN) > 2;