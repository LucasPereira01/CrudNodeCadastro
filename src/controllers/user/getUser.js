const User = require('../../models/user')

const getUserControler = (req, res) => {
  return User.findOne({ _id: req.params.id })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).json({ erros: [err.message] }))
}

module.exports = getUserControler
