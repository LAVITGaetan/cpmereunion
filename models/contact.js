const mongoose = require('mongoose');


// Adhérent Schema
const ContactSchema = new mongoose.Schema({
    contact_titre:{
        type: String,
        minlength:2,
        maxlength:100
    },
    contact_nom:{
        type: String,
        minlength:2,
        maxlength:100
    },
    contact_prenom:{
        type: String,
        minlength:2,
        maxlength:100
    },
})

module.exports = new mongoose.model('Contact', ContactSchema);