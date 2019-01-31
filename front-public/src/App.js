import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Titre from './components/Titre';
import ListeProduit from './components/ListeProduit';
import axios from 'axios';
import { listeProduits } from './actions/produit';
import { listeCategories } from './actions/categorie';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import PageProduit from './components/PageProduit';
import Footer from './components/Footer';
import Panier from './components/Panier';
import CommandeValidee from './components/CommandeValidee';

class App extends Component {

  componentDidMount() {
    const { listeProduits, listeCategories } = this.props;
    axios.get('/api/produit')
      .then(res => {
        const produits = res.data;
        listeProduits(produits);
      })
      .catch(err => console.error(err));
    axios.get('/api/categorie')
      .then(res => {
        const categories = res.data;
        listeCategories(categories);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Titre />
        <Divider />
        <Switch>
          <Route exact path="/" component={ListeProduit} />
          <Route path="/mon-panier/commande-validee" component={CommandeValidee} />
          <Route path="/:name/:id" component={PageProduit} />
          <Route path="/mon-panier" component={Panier} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  listeProduits, listeCategories
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
