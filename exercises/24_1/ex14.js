db.xmen.updateMany(
  {"class": "unknown"},
  {
    $unset: { "class": "" },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);
