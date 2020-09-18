db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $subtract: [
                "$$NOW",
                "$dataNascimento"
              ]
            },
            {
              $multiply: [8.64e+7, 365]
            }
          ]
        }
      }
    }
  },
  {
    $match: {
      idade: {
        $gte: 18, $lte: 25
      }
    }
  },
  {
    $count: "clientes_idades_18-25_anos"
  }
]).pretty();
