const Product = require('../../models/products')

const getProductControler = (req, res) => {
  return Product.findOne({ _id: req.params.id })
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}

module.exports = getProductControler
