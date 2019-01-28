const mysql = require('mysql');
const connexion = require('../settings.json');

const db = mysql.createConnection(connexion.connexion);

module.exports = db;
