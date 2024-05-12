const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const authService = require('../services/authService');
// User management routes

router.get('/', authService.roleMiddleware('admin'), userService.getAllUsers);
router.post('/', authService.roleMiddleware('admin'),  userService.createUser);
router.put('/:id', authService.roleMiddleware('admin'),  userService.updateUser);
router.delete('/:id', authService.roleMiddleware('admin'),  userService.deleteUser);

module.exports = router;
