SELECT DISTINCT building FROM employees;

SELECT Building_name, Capacity FROM Buildings;

SELECT
  DISTINCT Building_name,
  Role
FROM Buildings
LEFT JOIN Employees
ON Building_name = Building;
