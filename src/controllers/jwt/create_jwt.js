const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const secret = 'secret'

const createjwtUserController = (req, res) => {
  return User
    .findOne({ email: req.body.email })
    .then((user) => {
      if (user.password === req.body.password) {
        return jwt.sign({ name: user.name, email: user.email }, secret, (err, token) => {
          if (!err) {
            res.status(201).send(token)
          }
          throw err
        })
      }
      throw new Error('Falha ao logar')
    })
    .catch((err) => res.status(400).send(err.message))
}

module.exports = createjwtUserController
