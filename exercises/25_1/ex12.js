db.vendas.aggregate([
  {
    $match: {
      "dataVenda": {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-12-31'),
      }
    }
  }, {
    "$lookup": {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "clientesRelacionados"
    }
  },
  {
    $unwind: "$clientesRelacionados"
  },
  {
    $group: {
      _id: "$clientesRelacionados.endereco.uf",
      totalVendas: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  {
    $limit: 3
  }, {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]).pretty();
