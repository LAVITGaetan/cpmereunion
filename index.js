const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

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
    console.log(`Server starting at http://localhost/${PORT}`);
})