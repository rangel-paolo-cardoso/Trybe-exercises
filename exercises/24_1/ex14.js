db.xmen.updateMany(
  {"class": "unknown"},
  {
    $unset: { "class": "" }
  }
);
