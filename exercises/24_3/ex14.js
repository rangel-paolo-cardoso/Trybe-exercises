db.movies.find({
  $and: [
    {
      "ratings": {
        $size: 4
      }
    },
    {
      $or: [
        {
          "category": {
            $all: ["adventure"]
          }
        },
        {
          "category": {
            $all: ["family"]
          }
        }
      ]
    },
    {
      "imdbRating": { $gte: 7 }
    }
  ]
});
