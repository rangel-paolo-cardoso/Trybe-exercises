db.xmen.updateMany(
  {
    $or: [
      {"class": "omega"},
      {"class": "gama"}
    ]
  },
  {
    $max: { "power": 500 },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);
