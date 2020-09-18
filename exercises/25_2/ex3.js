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
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  }
]).pretty();
