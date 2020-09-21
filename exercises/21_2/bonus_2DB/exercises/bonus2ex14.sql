SELECT Name FROM Departments Dep
WHERE (
  SELECT COUNT(*)
  FROM Employees Emp
  WHERE Emp.Department = Dep.Code
) > 2;
