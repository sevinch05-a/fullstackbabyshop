require('dotenv').config();
const cors = require('cors')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5001
const connectToDb = require('./config/connectToDb');
connectToDb();
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(cors({
    origin: true,
    credentials: true
}))







//const notesController = require('./controllers/notesController')
//--------------------------------------------[Routes => GET POST PUT PATCH DELETE]

//app.use(express.json())


//app.get('/notes',notesController.fetchNotes)
//--->Retrieve all note in DB
//app.get('/notes/id',notesController.fetchNote)
//--->Retrieve Specific note in DB
//app.post('/notes',notesController.createNote)
//---> Add a Note to DB
//app.put('/notes/:id',notesController.updateNote)
//---> Edit a Existing Note in DB
//app.delete('/notes/:id',notesController.deleteNote)
//--> Delete a Existing Note in DB


app.listen(PORT,()=>{
console.log(`ServerConnected: ${PORT}`)
})
