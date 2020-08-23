SELECT
  *
FROM praticando.Employees AS Employees
JOIN praticando.Departments AS Department
ON Employees.Department = Department.Code;
