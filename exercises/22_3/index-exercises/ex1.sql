USE sakila;
CREATE FULLTEXT INDEX index_category ON sakila.category(name);

-- Query cost: 0.35
SELECT * FROM category
WHERE MATCH(name) AGAINST('action');

DROP INDEX index_category ON sakila.category;

-- Query cost: 1.85
SELECT * FROM category
WHERE name LIKE '%action%';
