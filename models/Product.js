// Import mongoose
const mongoose = require('mongoose');

// Define the Product schema/model
const productSchema = mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

// Export the Product schema/model
module.exports = mongoose.model('Product', productSchema);