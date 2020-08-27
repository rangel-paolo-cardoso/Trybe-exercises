SELECT
  Staff.first_name AS 'First Name',
  Staff.last_name AS 'Last Name',
  Address.address AS 'Staff''s Address'
FROM sakila.staff AS Staff
INNER JOIN sakila.address AS Address
ON Staff.address_id = Address.address_id;
