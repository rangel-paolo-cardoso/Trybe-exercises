SET SQL_SAFE_UPDATES = 0;

UPDATE betrybe.Employees AS Emp
SET Emp.Department = 14
WHERE Emp.Department = 77;
