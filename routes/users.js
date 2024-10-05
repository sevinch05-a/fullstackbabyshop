const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const UserController = require('../controllers/userController')

router.get('/', UserController.fetchUsers);

// GET /api/products/:id - get product id
router.get('/:id',UserController.fetchUserById);

// POST /api/products - create new product
router.post('/', UserController.newUser);

// PUT /api/products/:id - update product
router.put('/:id',  UserController.updateUser);

// DELETE /api/products/:id - delete product
router.delete('/:id',  UserController.deleteUser);

// Middleware for get product by id



module.exports = router;



