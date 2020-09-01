USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_delete_movies
  BEFORE DELETE ON movies
  FOR EACH ROW
BEGIN
  INSERT INTO movies_logs (movie_id, action, log_date)
  VALUES (OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;
