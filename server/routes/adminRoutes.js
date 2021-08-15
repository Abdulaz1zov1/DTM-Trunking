const express = require('express')
const router = express.Router()
const {userCreate} = require('../controller/adminController')
const {login} = require('../controller/adminController')
const isAuth = require('../middleware/isAuth')


router.post('/add', userCreate.register)
router.get('/all', userCreate.gelAll)
router.post('/login', login)

module.exports = router 