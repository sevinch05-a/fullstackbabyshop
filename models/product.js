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
        enum: ['clothes','accessories'],
        required: true,
    },
    size: {
        type: String,
        enum: ['small','medium','large'],
        required: true,
       
    },
    color: {
        type: String,
        required: true, 
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true,
});



module.exports = mongoose.model('Product', productSchema);








































// Establish Data Structure (Schema) for a particular model

//const mongoose = require('mongoose')

//const noteSchema = new mongoose.Schema({
//title: String,
//body: String

//})

//const Note = mongoose.model("Note",noteSchema)

//module.exports = Note;

