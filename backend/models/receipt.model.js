const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, index: true },
  type: { type: String, required: true },
  color: { type: String, required: false },
  icon: { type: String, required: false },
})

const receiptSchema = mongoose.Schema({
  user_id: { type: String, required: true, index: true },
  category: [categorySchema],
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
})

const Receipt = mongoose.model('Receipt', receiptSchema)

module.exports = Receipt
