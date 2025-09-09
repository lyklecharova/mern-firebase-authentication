const express = require('express');
const router = express.Router();

const {
    createOrUpdateUSer,
    currentUser,
} = require('../controller/authController');

router.post('/create-or-update-user', createOrUpdateUSer);
router.post('/current-user', currentUser);

module.exports = router;
