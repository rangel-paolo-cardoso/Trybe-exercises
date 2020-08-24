SELECT
  MT.*,
  M.title,
  M.rating
FROM praticando.MovieTheaters AS MT
INNER JOIN praticando.Movies AS M
ON MT.Movie = M.Code;
