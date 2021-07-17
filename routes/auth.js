const express = require('express');
const router = express.Router();

// @route   POST api/auth
// @desc    Authenticate users
// @access  Public
router.post('/', (req, res) => {
    res.send('authenticate user')
})

// @route   GET api/auth
// @desc    GET User profile
// @access  Private
router.get('/', (req, res) => {
    res.send('get user')
})

module.exports = router;
