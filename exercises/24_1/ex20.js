db.xmen.updateMany(
  {
    $and: [
      {"occupation": "Junior Staff"},
      {"areas": { $exists: false }}
    ]
  },
  {
    $set: {
      "areas": ["outside"]
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);
