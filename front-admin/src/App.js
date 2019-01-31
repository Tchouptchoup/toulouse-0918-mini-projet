import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Title from './components/Title';
import AjoutProduit from './components/Produits/AjoutProduit';
import Categorie from './components/Catégories/Categorie';
import ListeProduits from './components/Produits/ListeProduits';
import { listeCategories } from './actions/categorie';
import { listProduct } from './actions/produit';

class App extends Component {
  componentDidMount() {
    const { listeCategories, listProduct } = this.props;
    axios.get('api/categorie')
      .then(res => {
        const liste = res.data;
        listeCategories(liste);
      })
      .catch(err => console.error(err));
    axios.get('api/produit')
      .then(res => {
        const produits = res.data;
        listProduct(produits);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Title />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ListeProduits} />
          <Route path="/liste-des-produits" component={ListeProduits} />
          <Route path="/ajouter-un-produit" component={AjoutProduit} />
          <Route path="/gerer-les-categories" component={Categorie} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  listeCategories, listProduct
};

export default connect(null, mapDispatchToProps)(App);
