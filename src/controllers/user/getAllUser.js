const User = require('../../models/user')

const getAllUserControler = (req, res) => {
  return User.find({})
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(500).json({ erros: [err.message] }))
}

module.exports = getAllUserControler
