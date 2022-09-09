const express = require('express');
const mongoose = require('mongoose');
const fetch = import('node-fetch');
const axios = require('axios');
const app = express();
require('dotenv').config();
const adherentRoute = require('./routes/adherents');

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs')

// Static Files
app.use(express.static('public'));

// API ROUTES
app.use('/api/adherents', adherentRoute);


// ROUTES
app.use('/accueil', async (req, res) => {
    let api_uri = 'http://cpmereunion.herokuapp.com/api/adherents';
    let adherents = [];

    try {
        let response = await axios.get(api_uri)
        console.log(response.data);
        response.data.forEach(adherent => {
            adherents.push(adherent)
            console.log(adherent);
        });
        res.render('pages/accueil', { title: 'Hello world', adherents: adherents })
    } catch (error) {
        console.error(error)
    }
})
app.use('/', (req, res) => {
    res.send({ message: 'hello' })
})

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