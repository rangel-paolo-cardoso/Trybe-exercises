SELECT
  M.title,
  B.domestic_sales,
  B.international_sales
FROM Movies AS M
JOIN Boxoffice AS B
ON M.id = B.movie_id;

SELECT
  M.title,
  B.domestic_sales,
  B.international_sales
FROM Movies AS M
JOIN Boxoffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > domestic_sales;

SELECT
  M.title
FROM Movies AS M
JOIN Boxoffice AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;
