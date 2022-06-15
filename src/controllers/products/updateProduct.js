const Products = require('../../models/products')

const updateProductsControler = (req, res) => {
  const query = { _id: req.params.id }
  const updateData = { $set: req.body }
  const options = { new: true, filds: ['name', 'price', 'quantidade'] }

  return Products.findOneAndUpdate(query, updateData, options)
    .then(product => res.status(201).send(product))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}

module.exports = updateProductsControler
