SET SQL_SAFE_UPDATES = 0;

UPDATE Departments
SET Budget = Budget - (Budget * (10 / 100));
