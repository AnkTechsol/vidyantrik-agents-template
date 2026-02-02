const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const mcqRoutes = require('./routes/mcq');
const finalTestRoutes = require('./routes/finalTest');
const certificateRoutes = require('./routes/certificate');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// JWT Authentication Middleware Stub
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  // TODO: Verify JWT token
  // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  //   if (err) return res.sendStatus(403);
  //   req.user = user;
  //   next();
  // });

  // Mock user for now
  req.user = { id: 1, name: 'Test Student' };
  next();
};

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', authenticateToken, mcqRoutes); // Mounting mcqRoutes under /courses for :id/submit-mcq
app.use('/api/final-test', authenticateToken, finalTestRoutes);
app.use('/api/certificate', authenticateToken, certificateRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Vidyantrik Backend API is running.');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
