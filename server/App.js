const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Static Files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const exampleRoutes = require('./routes/example');
app.use('/api/example', exampleRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;