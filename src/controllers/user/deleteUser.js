const User = require('../../models/user')

const deleteUserControler = (req, res) => {
  const query = { _id: req.params.id }
  return User.deleteOne(query)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send({ erros: [err.message] }))
}

module.exports = deleteUserControler
