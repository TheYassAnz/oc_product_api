// Import express
const express = require('express');

// Import Mongoose
const mongoose = require('mongoose');

// Connect to the database 
mongoose.connect('mongodb+srv://ysma:zQQ5jj82GDAP2sen@ocexpressexercice.xtyis6e.mongodb.net/?retryWrites=true&w=majority&appName=ocExpressExercice',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Create an express app
const app = express();

// First middleware will be called for every request
app.use((req, res, next) => {
    res.json({ message: 'Hello World!' });
});

// Export the express app
module.exports = app;