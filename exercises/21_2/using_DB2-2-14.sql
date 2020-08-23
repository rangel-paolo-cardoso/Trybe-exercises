SELECT
  Department.Name,
  COUNT(Employees.SSN) AS qtd_funcionarios
FROM praticando.Employees AS Employees
JOIN praticando.Departments AS Department
ON Employees.Department = Department.Code
GROUP BY Department.Name
HAVING qtd_funcionarios > 2;
