db.xmen.updateMany(
  {
    "class": { $exists: false }
  },
  {
    $inc: { "power": -100 },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);
