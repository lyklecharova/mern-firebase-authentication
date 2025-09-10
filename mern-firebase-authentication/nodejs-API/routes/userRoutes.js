const express = require('express');
const router = express.Router();

// user controller
const {
    listAllUser,
    getUserById,
    updateUserById,
} = require('../controller/userController');

// Routes
router.get('/list-all-users', listAllUser);
router.get('/get-user-by-id/:id', getUserById);
router.put('/update-user-by-id/:id', updateUserById);

module.exports = router;
