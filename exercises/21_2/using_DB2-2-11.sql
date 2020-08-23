SELECT
  Employees.Name,
  Employees.LastName,
  Department.Name AS Department_name,
  Department.Budget AS Department_bugget
FROM praticando.Employees AS Employees
JOIN praticando.Departments AS Department
ON Employees.Department = Department.Code;
