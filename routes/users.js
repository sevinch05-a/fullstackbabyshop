const express = require('express');
 const router = express.Router();
 const User = require('../models/user');
 const {
     registerUser,
     loginUser,
      getMe,
     } = require('../controllers/userControllers')

// router.get('/', UserController.fetchUsers);

// // GET /api/products/:id - get product id
// router.get('/:id',UserController.fetchUserById);


 router.post('/', registerUser);
 router.post('/login', loginUser);
 router.get('/me', getMe)

// // PUT /api/products/:id - update product
// router.put('/:id',  UserController.updateUser);

// // DELETE /api/products/:id - delete product
// router.delete('/:id',  UserController.deleteUser);

// // Middleware for get product by id



 module.exports = router;



