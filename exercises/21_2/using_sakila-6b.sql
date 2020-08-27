SELECT
  Staff.first_name AS `First Name`,
  Staff.last_name AS `Last Name`,
  COUNT(Payment.amount) AS Amount
FROM sakila.staff AS Staff
LEFT JOIN sakila.payment AS Payment
ON Staff.staff_id = Payment.staff_id
WHERE MONTH(Payment.payment_date) = 8 AND YEAR(Payment.payment_date) = 2005
GROUP BY `First Name`, `Last Name`;
