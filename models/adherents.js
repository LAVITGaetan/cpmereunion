const mongoose = require('mongoose');

// Adhérent Schema
const AdherentSchema = new mongoose.Schema({
    entreprise: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    adresse: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    activite: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    nom: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    prenom: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    telephone: {
        type: String,
        minlength: 3,
        maxlength: 30
    },
    identifiant: {
        type: String,
        required: true,
        minlength: 5,
    },
    siteweb: {
        type: String,
        minlength: 5,
        maxlength: 100
    },
    logo: {
        type: String,
        minlength: 5,
    },
    parution: {
        type: Boolean,
        default: 1,
        required: true,
    },
    status: {
        type: Boolean,
        default: 1,
        required: true,
    },
    contact: {
        titre : String,
        nom : String,
        prenom : String,
        telephone : String,
        email : String,
        linkedin : String
    },
    contactSecondaire: {
        titre : String,
        nom : String,
        prenom : String,
        telephone : String,
        email : String,
        linkedin : String
    }
});

module.exports = new mongoose.model('Adherent', AdherentSchema);