SET SQL_SAFE_UPDATES = 0;

DELETE FROM Employees
WHERE Department = (
  SELECT Code FROM Departments
  WHERE Budget >= 60000
);
