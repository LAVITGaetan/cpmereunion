const axios = require('axios');

exports.index = async (req, res) => {
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
}

exports.adherents = async (req, res) => {
    let api_uri = 'http://cpmereunion.herokuapp.com/api/adherents';
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