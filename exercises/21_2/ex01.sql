SELECT
  M.title,
  B.domestic_sales,
  B.international_sales
FROM Movies AS M
JOIN Boxoffice AS B
ON M.id = B.movie_id;
