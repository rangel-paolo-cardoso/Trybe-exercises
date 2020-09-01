USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies
  BEFORE INSERT ON movies
  FOR EACH ROW
BEGIN
  SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_insert_logs_movies
  AFTER INSERT ON movies
  FOR EACH ROW
BEGIN
  INSERT INTO movies_logs (movie_id, action, log_date)
  VALUES (NEW.movie_id, 'INSERT', NOW(0);
END $$

DELIMITER ;
