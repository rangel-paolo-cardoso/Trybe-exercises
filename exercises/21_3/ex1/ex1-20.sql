SET SQL_SAFE_UPDATES = 0;

UPDATE betrybe.Products AS Products
SET Products.price = Products.price * 0.9
WHERE Products.price >= 120;
