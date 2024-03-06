// Import express
const express = require('express');

// Import Mongoose
const mongoose = require('mongoose');

// Import Product model
const Product = require('./models/Product');

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

// GET /api/products route 
app.get('/api/products', (req, res, next) => {
    Product.find()
        // return a json object with the products
        .then(products => res.status(200).json(products))
        // return the error object if there is an error
        .catch(error => res.status(500).json({ error }));
});

// Export the express app
module.exports = app;