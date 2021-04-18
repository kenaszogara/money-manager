const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LogRocket Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'LogRocket',
        url: 'https://logrocket.com',
        email: 'info@email.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000'
      }
    ]
  },
  apis: ['./routers/receipt.js']
}

const specs = swaggerJsdoc(options)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// connect to mongoDB
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Successfully connected to MongoDB')
})

// print all routes to console
app.get('/', (req, res) => {
  const print = require('./printAllRoutes')
  res.send(app._router.stack.forEach(print.bind(null, [])))
})

// load api routes
const routes = require('./routers/index')
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
