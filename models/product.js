const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;








































// Establish Data Structure (Schema) for a particular model

//const mongoose = require('mongoose')

//const noteSchema = new mongoose.Schema({
//title: String,
//body: String

//})

//const Note = mongoose.model("Note",noteSchema)

//module.exports = Note;
