const express = require('express');

const router = express.Router();
const db = require('../helpers/db');

router.post('/add', (req, res) => {
  const post = [req.body.name, req.body.slug];
  db.query('INSERT INTO category (name, slug) VALUES (?,?)', post, (error) => {
    if (error) {
      return res.status(500).json({
        err: error.message
      });
    }
    db.query('SELECT * from category', (err, liste) => {
      if (err) {
        return res.sendStatus(500).json({
          err: error.message
        });
      }
      return res.status(200).json(liste);
    });
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * from category', (error, result) => {
    if (error) {
      return res.sendStatus(500).json({
        err: error.message
      });
    }
    return res.status(200).json(result);
  });
});

router.delete('/suppression/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM category WHERE id=?', [id], (error) => {
    if (error) {
      return res.status(500).json({
        err: error.message
      });
    }
    db.query('SELECT * from category', (err, liste) => {
      if (err) {
        return res.sendStatus(500).json({
          err: error.message
        });
      }
      return res.status(200).json(liste);
    });
  });
});

module.exports = router;
