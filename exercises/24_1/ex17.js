db.xmen.updateMany(
  {"class": "gama"},
  {
    $min: { "power": 300 },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);
