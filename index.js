const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const adherentRoute = require('./routes/adherents');

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/adherents', adherentRoute);
app.use('/', (req, res) => {
    res.send({message : 'hello'})
})

// connect to database
mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser:true})
.then(() => {
    console.log('connected to database');
}).catch(error => {
    console.log(`an error happened : ${error}`);
})

// start server
app.listen(PORT, () => {
    console.log(`Server starting at http://localhost:${PORT}`);
})