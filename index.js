const express = require('express');
const mongoose = require('mongoose');
const app = express();
const services = require('./services/render')
require('dotenv').config();
const adherentRoute = require('./routes/adherents');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  app.use(cors(corsOptions));
// Set view engine
app.set('view engine', 'ejs')

// Static Files
app.use(express.static('public'));

// API ROUTES
app.use('/api/adherents', adherentRoute);


// ROUTES
app.use('/accueil', services.index)

app.get('/adherents', services.adherents)

// connect to database
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true })
    .then(() => {
        console.log('connected to database');
    }).catch(error => {
        console.log(`an error happened : ${error}`);
    })

// start server
app.listen(PORT, () => {
    console.log(`Server starting at http://localhost:${PORT}`);
})