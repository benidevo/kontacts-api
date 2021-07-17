const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/auth
// @desc    Authenticate users
// @access  Public
router.post('/', [
    check('email', 'Include a valid email address').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({"errors": errors.array()})
    }
    
    const { email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({msg: 'invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({msg: 'Passwords do not match'})
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (error, token) => {
            if (error) {
                throw error
            }
            res.json({token})
        })

    } catch (error) {
        console.error(error.message)
        res.status('server error')
    }
})

// @route   GET api/auth
// @desc    GET User profile
// @access  Private
router.get('/', (req, res) => {
    res.send('get user')
})

module.exports = router;
