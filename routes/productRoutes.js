const express = require('express')
const ProductController = require('../controllers/ProductController')
const { populate } = require('dotenv')
const router = express.Router()

router.get('/products', ProductController.findAll)
router.get('/products/id/', ProductController.findById)
router.post('/products/id', ProductController.save)
router.put('/products/id', ProductController.update)
router.patch('/products/id', ProductController.patch)
router.delete('/products/id', ProductController.deleteProduct)

module.exports = router