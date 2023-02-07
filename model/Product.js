const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageLocation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Product', productSchema);