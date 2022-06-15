const User = require('../../models/user')

const createuserController = (req, res) => {
  return User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(500).json({ erros: [err.message] }))
}

module.exports = createuserController
