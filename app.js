const express = require('express')
require('./database/MongooseConnection')

const productRoutes = require('./routes/productRoutes')
const userRouter = require('./routes/UserRouter')
const authJwt = require('./libs/jwt')

const app = express()
const port = 3000
app.use(express.json())

app.use(authJwt())
app.use('/api/v1', productRoutes)
app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))