import React, { Component } from 'react';
import {
  Grid, Item, Button
} from 'semantic-ui-react';
import ProduitPanier from './ProduitPanier.js';
import { connect } from 'react-redux';
import { totalPanier } from '../helpers/totalPanier';
import axios from 'axios';
import { majStock } from '../actions/produit';
import { withRouter } from 'react-router-dom';

class Panier extends Component {

  submitCommande = () => {
    const { panier, majStock } = this.props;
    const items = panier.map(produit => ({ product_id: produit.id, price: produit.price, quantity: produit.quantite }))
    axios.post('/api/commande/add', items)
      .then(res => res.data)
      .catch(err => console.error(err))
    axios.put('/api/commande/stock', items)
      .then(res => res.data)
      .then(this.props.history.push("/mon-panier/commande-validee"))
      .catch(err => console.log(err))
    majStock(items)

  };

  render() {
    const { panier } = this.props;
    return (
      <Grid>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ fontSize: '1.6rem', marginTop: '10px' }}>
            Mon panier
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={10}>
            {panier && panier.map(produit => (
              <ProduitPanier key={produit.id} produit={produit} />
            ))}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={10}>
            <Item style={{ textAlign: "right", marginRight: '20px' }}>
              <Item.Content>
                <b>Total : </b>{totalPanier(panier)}{' '}€
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Button onClick={this.submitCommande}>Commander !</Button>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  panier: state.panier.panier
});

const mapDispatchToProps = {
  majStock
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Panier));
