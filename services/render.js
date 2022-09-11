const axios = require('axios');

exports.index = async (req, res) => {
    let api_uri = 'https://cpmereunion.herokuapp.com/api/adherents';
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
}

exports.adherents = async (req, res) => {
    let api_uri = 'https://cpmereunion.herokuapp.com/api/adherents';
    let adherents = [];
    try {
        const response = await axios.get(api_uri)
        response.data.forEach(adherent => {
            adherents.push(adherent)
            console.log(adherent);
        });
        res.render('pages/liste-adherents', { title: 'Hello world', adherents: adherents })
    } catch (error) {
        console.error(error)
    }
}

exports.newAdherent = (req, res) => {
    res.render('pages/add-adherent', {title: 'Ajouter un adhérent'})
}

exports.editAdherent = async (req, res) => {
    let api_uri = `https://cpmereunion.herokuapp.com/api/adherents/${req.query.id}`;
    let adherents = [];
    try {
        const response = await axios.get(api_uri)
        adherents.push(response.data)
        res.render('pages/edit-adherent', { title: 'Modifier un adhérent', adherents: adherents })
    } catch (error) {
        console.error(error)
    }
}

exports.editContact = async (req, res) => {
    let api_uri = `https://cpmereunion.herokuapp.com/api/adherents/${req.query.id}`;
    let adherents = [];
    try {
        const response = await axios.get(api_uri)
        adherents.push(response.data)
        res.render('pages/edit-contact', { title: 'Modifier une parution', adherents: adherents })
    } catch (error) {
        console.error(error)
    }
}

exports.getAdherent = async (req, res) => {
    let api_uri = `https://cpmereunion.herokuapp.com/api/adherents/${req.query.id}`;
    let adherent = [];
    try {
        const response = await axios.get(api_uri)
        adherent.push(response.data)
        res.render('pages/profil-adherent', { title: 'Profil adhérent', adherent: adherent })
    } catch (error) {
        console.error(error)
    }
}