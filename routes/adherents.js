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
            contact_titre: req.body.contact_titre,
            contact_nom: req.body.contact_nom,
            contact_prenom: req.body.contact_prenom
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
        section: req.body.section,
        adresse: req.body.adresse,
        activite: req.body.activite,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.prenom,
        identifiant: req.body.prenom,
        siteweb: req.body.prenom,
        logo_url: req.body.prenom,
        contact: {
            contact_titre: req.body.contact_titre,
            contact_nom: req.body.contact_nom,
            contact_prenom: req.body.contact_prenom
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