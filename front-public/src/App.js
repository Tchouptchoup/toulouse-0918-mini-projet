import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Titre from './components/Titre';
import ListeProduit from './components/ListeProduit';
import axios from 'axios';
import { listeProduits } from './actions/produit';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import PageProduit from './components/PageProduit';

class App extends Component {

  componentDidMount() {
    const { listeProduits } = this.props;
    axios.get('api/produit')
      .then(res => {
        const produits = res.data;
        listeProduits(produits);
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
          <Route path="/:name/:id" component={PageProduit} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  listeProduits
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
