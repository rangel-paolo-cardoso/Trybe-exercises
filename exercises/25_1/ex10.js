db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalDeCompas: {
        $sum: 1
      }
    }
  }, {
    $match: {
      totalDeCompas: { $gt: 5 }
    }
  }, {
    $count: "clientes"
  }
]);
