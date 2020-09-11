db.movies.find(
  {
    "ratings": {
      $elemMatch: { $gt: 103 }
    }
  },
  {"title": 1, "ratings": 1}
);
