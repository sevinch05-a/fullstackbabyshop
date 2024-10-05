// connet to Database --> Export server
require('dotenv').config()
const mongoose = require('mongoose')

const connectToDb = async() => {
    try{
    await mongoose.connect(process.env.DB_URI) 
    console.log("Database Connected")
} catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1)
}
};

module.exports = connectToDb;
