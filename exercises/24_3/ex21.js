db.movies.find({
  $text: { $search: "vacation" }
});
