import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Produit from './Produit';
import { connect } from 'react-redux';

class ListeProduit extends Component {
  render() {
    const { produits } = this.props;
    return (
      <Grid>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
          {produits && produits.map(produit => (
            <Grid.Column key={produit.id} mobile={16} tablet={8} computer={4}>
              <Produit produit={produit} style={{ textAlign: 'center' }} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  produits: state.produit.produits
});

export default connect(mapStateToProps)(ListeProduit);