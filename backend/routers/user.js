const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// find by id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// find by username
router.route('/username/:username').get((req, res) => {
  User.find({
    username: { $eq: req.params.username }
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// add new user
router.route('/add').post((req, res) => {
  const username = req.body.username
  const password = req.body.password
  const category = req.body.category

  const newUser = new User({ username, password, category })

  newUser
    .save()
    .then((user) =>
      res.json({ message: 'User added!', status: 200, data: user })
    )
    .catch((err) => res.status(400).json('Error: ' + err))
})

// update by id
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      users.username = req.body.username
      users.password = req.body.password

      users
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// delete by id
router.route('/delete/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
