db.movies.find({
  "category": {
    $all: ["action"]
  },
  "imdbRating": {
    $gt: 7
  }
});
