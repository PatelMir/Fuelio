const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route (to fix "Cannot GET /" error)
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Example API Route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

module.exports = app;