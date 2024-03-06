// Import express
const express = require('express');

// Create an express app
const app = express();

// First middleware will be called for every request
app.use((req, res, next) => {
    res.json({ message: 'Hello World!' });
});

// Export the express app
module.exports = app;