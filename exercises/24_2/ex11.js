// Query 1
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Batman"
  },
  {
    $push: {
      "cast.$.actor": "Christian Bale"
    }
  }
);

// Query 2
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Alfred"
  },
  {
    $push: {
      "cast.$.actor": "Michael Caine"
    }
  }
);


