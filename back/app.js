const express = require('express');
const bodyParser = require('body-parser');
const categorieRouter = require('./routes/categorie');
const produitRouter = require('./routes/produit');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/categorie', categorieRouter);
app.use('/api/produit', produitRouter);

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
