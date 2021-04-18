const router = require('express').Router()
let Receipt = require('../models/receipt.model')

/**
 * @swagger
 * check:
 *  get:
 *    parameters:
 *      - name: id
 *        in: query
 *        description: test123
 *    description: test
 */
router.route('/').get((req, res) => {
  Receipt.find()
    .then((receipts) => res.json(receipts))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// find by id
router.route('/:id').get((req, res) => {
  Receipt.findById(req.params.id)
    .then((receipts) => res.json(receipts))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// add new receipt
router.route('/add').post((req, res) => {
  const user_id = req.body.user_id
  const category_id = req.body.category_id
  const type = req.body.type
  const amount = req.body.amount
  const date = req.body.date

  const newReceipt = new Receipt({
    user_id,
    category_id,
    type,
    amount,
    date
  })

  newReceipt
    .save()
    .then(() => res.json('Receipt added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// update by id
router.route('/update/:id').post((req, res) => {
  Receipt.findById(req.params.id)
    .then((receipt) => {
      receipt.user_id = req.body.user_id
      receipt.category_id = req.body.category_id
      receipt.type = req.body.type
      receipt.amount = req.body.amount
      receipt.date = req.body.date

      receipt
        .save()
        .then(() => res.json('Receipt updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// delete by id
router.route('/delete/:id').delete((req, res) => {
  Receipt.findByIdAndDelete(req.params.id)
    .then(() => res.json('Receipt deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
