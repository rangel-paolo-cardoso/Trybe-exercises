SELECT
  Emp.Name,
  Emp.LastName
FROM Employees Emp
WHERE Emp.Department = (
  SELECT Code From Departments
  ORDER BY Budget ASC
  LIMIT 1
  OFFSET 1
);
