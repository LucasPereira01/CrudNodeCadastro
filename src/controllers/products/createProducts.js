const Product = require('../../models/products')

const createProductController = (req, res) => {
  return Product.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}

module.exports = createProductController
