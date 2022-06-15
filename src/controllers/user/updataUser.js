const User = require('../../models/user')

const updataUserControler = (req, res) => {
  const query = { _id: req.params.id }
  const updateData = { $set: req.body }
  const options = { new: true, fields: ['name', 'email'] }

  return User.findOneAndUpdate(query, updateData, options)
    .then(user => res.status(202).send(user))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}
module.exports = updataUserControler
