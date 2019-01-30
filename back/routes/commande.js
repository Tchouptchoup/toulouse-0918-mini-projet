const express = require('express');

const router = express.Router();
const db = require('../helpers/db');

const fakeCheckToken = (req, res, next) => {
  req.user = {
    id: 1
  };
  next();
};

router.post('/add', fakeCheckToken, (req, res) => {
  const id = req.user.id;
  db.queryAsync('INSERT into order_eshop (user_id) VALUES (?)', id)
    .then(result => result.insertId)
    .then(order_id => req.body.map(produit => ({ ...produit, order_eshop_id: order_id })))
    .then(orderItems => {
      const inserts = orderItems.map(item => db.queryAsync('INSERT into order_product SET ?', item));
      return Promise.all(inserts);
    })
    .then(() => res.sendStatus(201))
    .catch(error => res.status(500).json({
      error: error.message
    }));
});

router.put('/stock', fakeCheckToken, (req, res) => {
  db.queryAsync('SELECT * from product')
    .then(result => result)
    .then(allproducts => allproducts.filter(product => {
      for (let i = 0; i < req.body.length; i += 1) {
        if (req.body[i].product_id === product.id) {
          return product;
        }
      }
    }).map(product => {
      for (let i = 0; i < req.body.length; i += 1) {
        if (req.body[i].product_id === product.id) {
          return { ...product, stock: (product.stock - req.body[i].quantity) };
        }
      }
    }))
    .then(products => {
      const updates = products.map(item => db.queryAsync('UPDATE product SET ? WHERE id=?', [{ stock: item.stock }, item.id]));
      return Promise.all(updates);
    })
    .then(() => res.status(201))
    .catch(error => res.status(500).json({
      error: error.message,
      details: error.sql
    }));
});

module.exports = router;
