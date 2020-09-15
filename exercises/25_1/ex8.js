db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      valorTotal: {
        $sum: "$valorTotal"
      }
    }
  }, {
    $sort: {
      valorTotal: -1
    }
  }, {
    $limit: 5
  }
]);
