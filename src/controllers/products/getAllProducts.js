const Product = require('../../models/products')

const getAllProductControler = (req, res) => {
  return Product.find({})
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}

module.exports = getAllProductControler
