const express = require('express')
const router = express.Router()
const {CreatPut} = require('../controller/newController')



router.put('/:id', CreatPut.UpdatePage)
router.get(':id', CreatPut.getByIDNew)
router.get('/all', CreatPut.getAll)
router.post('/add', CreatPut.add)
router.delete('/:id', CreatPut.deleteNews)

module.exports = router