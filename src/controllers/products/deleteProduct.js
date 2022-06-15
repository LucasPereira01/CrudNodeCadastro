const Products = require('../../models/products')

const deleteProductsControler = (req, res) => {
  const query = { _id: req.params.id }
  return Products.deleteOne(query)
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}

module.exports = deleteProductsControler
