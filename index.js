// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js app!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is a simple Node.js app for testing Vercel deployment.');
});

// Start server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
