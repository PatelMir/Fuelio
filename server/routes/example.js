const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.json({ message: 'Hello from the /api/example route!' });
});

module.exports = router;
