SELECT
  M.title 
FROM praticando.Movies AS M
LEFT JOIN praticando.MovieTheaters AS MT
ON M.Code = MT.Movie
WHERE MT.Movie IS NULL;
