const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ "msg": "welcome to Kontacts" })
});
// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3500;

app.listen(PORT);