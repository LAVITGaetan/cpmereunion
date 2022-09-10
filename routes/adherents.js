const express = require('express');
const router = express.Router();
const Adherent = require('../models/adherents');


// Add new adhérent
router.post('/', (req, res) => {

    adherent = new Adherent({
        entreprise: req.body.entreprise,
        activite: req.body.activite,
        section: req.body.section,
        adresse: req.body.adresse,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        identifiant: req.body.identifiant,
        siteweb_url: req.body.siteweb_url,
        logo_url: req.body.logo_url,
        contact: {
            titre: req.body.contact_titre,
            nom: req.body.contact_nom,
            prenom: req.body.contact_prenom,
            email: req.body.contact_email,
            telephone: req.body.contact_telephone,
            linkedin: req.body.contact_linkedin
        },
        contactSecondaire: {
            titre: req.body.contactSecondaire_titre,
            nom: req.body.contactSecondaire_nom,
            prenom: req.body.contactSecondaire_prenom,
            email: req.body.contactSecondaire_email,
            ctelephone: req.body.contactSecondaire_telephone,
            linkedin: req.body.contactSecondaire_linkedin
        }
    })


    adherent.save().then(adherent => {
        res.status(200).send(adherent)
    }).catch(error => {
        res.status(500).send(`Cannot save adherent to database, error : ${error}`)
    });

});


// Get all adhérents
router.get('/', (req, res) => {
    Adherent.find()
        .then((adherents) => {
            res.send(adherents);
        })
        .catch((error) => {
            res.status(500).send({ message: 'Cannot get adherents' })
        });
});

// Get adherent by ID
router.get('/:id', async (req, res) => {
    const adherent = await Adherent.findById(req.params.id)
    if (!adherent) res.status(404).send({ message: `Cannot get adherent with id : ${req.params.id}` })
    res.send(adherent);
});

// Update adherent by ID
router.put('/:id', async (req, res) => {    
    const updatedAdherent = await Adherent.findByIdAndUpdate(req.params.id, {
        entreprise: req.body.entreprise,
        activite: req.body.activite,
        section: req.body.section,
        adresse: req.body.adresse,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        identifiant: req.body.identifiant,
        siteweb_url: req.body.siteweb_url,
        logo_url: req.body.logo_url,
        contact: {
            titre: req.body.contact_titre,
            nom: req.body.contact_nom,
            prenom: req.body.contact_prenom,
            email: req.body.contact_email,
            telephone: req.body.contact_telephone,
            linkedin: req.body.contact_linkedin
        },
        contactSecondaire: {
            titre: req.body.contactSecondaire_titre,
            nom: req.body.contactSecondaire_nom,
            prenom: req.body.contactSecondaire_prenom,
            email: req.body.contactSecondaire_email,
            ctelephone: req.body.contactSecondaire_telephone,
            linkedin: req.body.contactSecondaire_linkedin
        }
    },
    { new : true }
    );

    if (!updatedAdherent) res.status(404).send({ message: `Cannot get adherent with id : ${req.params.id}` })
    res.send(updatedAdherent);
});

// Delete adherent by ID
router.delete('/:id', async (req, res) => {    
    const deletedAdherent = await Adherent.findByIdAndRemove(req.params.id);

    if (!deletedAdherent) res.status(404).send({ message: `Cannot get adherent with id : ${req.params.id}` })
    res.send(deletedAdherent);
});

module.exports = router;