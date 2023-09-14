const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or 3000 as a default

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the React app for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
