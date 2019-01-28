const express = require('express');

const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const db = require('../helpers/db');

const upload = multer({ dest: './tmp' });

router.post('/ajout', upload.single('picture'), (req, res) => {
  fs.rename(req.file.path, `public/images/${req.file.originalname}`, (error) => {
    if (error) {
      return res.status(500).json('Problème durant le déplacement');
    }
    const post = [req.body.brand, req.body.name, req.body.reference, req.body.slug, req.body.description, req.body.stock, req.body.price, `/images/${req.file.originalname}`, req.body.category_id];
    db.query('INSERT INTO product (brand, name, reference, slug, description, stock, price, picture, category_id) VALUES (?,?,?,?,?,?,?,?, ?)', post, (err, results, fields) => {
      if (err) {
        return res.status(500).json({
          err: err.message
        });
      }
      db.query('SELECT * FROM product WHERE id=?', [results.insertId], (e, r) => {
        if (e) {
          return res.status(500).json({
            err: err.message
          });
        }
        return res.status(200).json(r);
      });
    });
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * from product', (error, result) => {
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
  db.query('DELETE FROM product WHERE id=?', [id], (error, results) => {
    if (error) {
      res.status(500).json({
        err: error.message
      });
    }
    res.status(200).json(id);
  });
});

router.put('/modification/:id', upload.single('picture'), (req, res) => {
  const id = req.params.id;
  if (req.file) {
    fs.rename(req.file.path, `public/images/${req.file.originalname}`, (error) => {
      if (error) {
        return res.status(500).json('Problème durant le déplacement');
      }
      const post = {
        ...req.body,
        picture: `/images/${req.file.originalname}`
      };
      db.query('UPDATE product SET ? WHERE id=?', [post, id], (err, results, fields) => {
        if (err) {
          return res.status(500).json({
            err: err.message,
            details: err.sql
          });
        }
        db.query('SELECT * FROM product WHERE id=?', [id], (e, r) => {
          if (e) {
            return res.status(500).json({
              err: err.message
            });
          }
          return res.status(200).json(r[0]);
        });
      });
    });
  } else {
    const formData = req.body;
    db.query('UPDATE product SET ? WHERE id=?', [formData, id], (err, results, fields) => {
      if (err) {
        return res.status(500).json({
          err: err.message
        });
      }
      db.query('SELECT * FROM product WHERE id=?', [id], (e, r) => {
        if (e) {
          return res.status(500).json({
            err: err.message
          });
        }
        return res.status(200).json(r[0]);
      });
    });
  }
});

module.exports = router;
