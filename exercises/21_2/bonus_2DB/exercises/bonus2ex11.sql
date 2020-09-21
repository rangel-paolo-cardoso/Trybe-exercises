SELECT
  Emp.Name,
  Emp.LastName,
  Dep.Name,
  Dep.Budget
FROM Employees Emp
INNER JOIN Departments Dep ON Dep.Code = Emp.Department;
