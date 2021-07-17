const express = require('express');
const router = express.Router();

// @route POST api/contacts
// @desc Add new contacts 
// @access private
router.post('/', (req, res) => {
    res.send('add contact')
});

// @route   GET api/contacts
// @desc    get all contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('get all contacts')
});

// @route   PUT api/contacts/:id
// @desc    Update contact by id
// @access  Private
router.put('/:id', (req, res) => {
    res.send('update contact by id')
})

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('delete contact')
});

module.exports = router;