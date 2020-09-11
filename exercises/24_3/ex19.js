db.movies.find({
  "description": {
    $regex: /humanity.$/
  }
});
