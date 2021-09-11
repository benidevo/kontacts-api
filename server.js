const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }))

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
  next();
});

app.get('/', (req, res) => {
    res.json({ "msg": "welcome to Kontacts" })
});

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));