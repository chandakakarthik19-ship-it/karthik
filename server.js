const express = require('express');
const app = express();
const path = require('path');

// Serve static frontend files (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Default route for root "/"
app.get('/', (req, res) => {
  res.send('🚀 Ramana Tractor API is running successfully!');
});

// Example API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Tractor Model A' },
    { id: 2, name: 'Tractor Model B' }
  ]);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Ramana Tractor API is running at http://localhost:${PORT}`);
});
