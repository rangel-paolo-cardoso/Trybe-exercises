db.vendas.aggregate([
  {
    $match: {
      "dataVenda": {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  }, {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "dadosDoCliente"
    }
  },
  {
    $unwind: "$dadosDoCliente"
  },
  {
    $group: {
      _id: "$dadosDoCliente.endereco.uf",
      totalVendas: {
        $sum: 1
      },
      mediaVendas: {
        $avg: "$valorTotal"
      }
    }
  }, {
    $sort: {
      _id: 1
    }
  }, {
    $project: {
      _id: 0,
      _id: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  }
]).pretty();
