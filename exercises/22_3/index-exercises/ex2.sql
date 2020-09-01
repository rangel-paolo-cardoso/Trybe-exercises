USE sakila;
CREATE INDEX index_address_postal_code ON address(postal_code);

-- Query cost: 0.95
SELECT * FROM address
WHERE postal_code = '36693';

DROP INDEX index_address_postal_code ON address;

-- Query cost: 65.40
SELECT * FROM address
WHERE postal_code = '36693';
