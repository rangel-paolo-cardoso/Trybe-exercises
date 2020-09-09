db.xmen.updateMany(
  {},
  {
    $rename: {
      "name": "hero_name",
      "true_name": "full_name"
    },
    $set: { "power": 100 },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);
