const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectToDataBase = require('./database/server')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const createjwtUserController = require('./controllers/jwt/create_jwt')
const jwtCheck = require('./middleware/jwt_check')
const { createuserController, getUserControler, updataUserControler, deleteUserControler, getAllUserControler } = require('./controllers/user/index')
const { createProductController, getProductControler, updateProductsControler, deleteProductsControler, getAllProductControler } = require('./controllers/products/index')

app.post('/api/jwt/user', createjwtUserController)

app.post('/api/user', createuserController)
app.get('/api/user/:id', getUserControler)
app.get('/api/user/', getAllUserControler)
app.put('/api/user/:id', jwtCheck, updataUserControler)
app.delete('/api/user/:id', jwtCheck, deleteUserControler)

app.post('/api/product', createProductController)
app.get('/api/product/:id', getProductControler)
app.get('/api/product', getAllProductControler)
app.put('/api/product/:id', updateProductsControler)
app.delete('/api/product/:id', deleteProductsControler)

connectToDataBase()
app.listen(3000, () => console.log('Rondadando'))
