SET SQL_SAFE_UPDATES = 0;

UPDATE Products
SET price = price - (price * 0.1);
