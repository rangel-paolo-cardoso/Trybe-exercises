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
