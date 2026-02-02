const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// TODO: Connect to DB to verify user

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  // TODO: Hash password and save to DB
  res.status(201).json({ message: 'User created' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // TODO: Validate user against DB

  const user = { id: 1, email }; // Mock user
  const token = jwt.sign(user, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
