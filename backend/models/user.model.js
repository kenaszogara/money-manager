const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, index: true },
  type: { type: String, required: true },
  color: { type: String, required: false },
  icon: { type: String, required: false },
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    index: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  category: [categorySchema],
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User
