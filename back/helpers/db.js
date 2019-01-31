const mysql = require('mysql');
const util = require('util');
const connexion = require('../settings.json');

const db = mysql.createConnection(connexion.connexion);
db.queryAsync = util.promisify(db.query.bind(db));

module.exports = db;
