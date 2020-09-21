SELECT
  Emp.Name,
  Emp.LastName
FROM Employees Emp
INNER JOIN Departments Dep ON Dep.Code = Emp.Department
WHERE Dep.Budget > 60000;
