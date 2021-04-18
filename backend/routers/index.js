const router = require('express').Router()

const usersRouter = require('./user')
const receiptsRouter = require('./receipt')

// routers
router.use('/api/v1/users', usersRouter)
router.use('/api/v1/receipts', receiptsRouter)

module.exports = router