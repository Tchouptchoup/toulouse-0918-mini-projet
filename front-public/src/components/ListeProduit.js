import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import Produit from './Produit';
import { connect } from 'react-redux';
import Filtre from './Filtre';

class ListeProduit extends Component {
  render() {
    const { produits, categories, filtres } = this.props;
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Catégories : </p>
            {categories && categories.map(categorie => (
              <Filtre categorie={categorie} key={categorie.id} />
            ))}
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          {filtres.length > 0
            ?
            produits && produits.filter(produit => {
              for (let i = 0; i < filtres.length; i += 1) {
                if (filtres[i] === produit.category_id) {
                  return produit
                }
              }
            }).map(produit => (
              <Grid.Column key={produit.id} mobile={16} tablet={8} computer={4}>
                <Produit produit={produit} style={{ textAlign: 'center' }} />
              </Grid.Column>
            ))
            :
            produits && produits.map(produit => (
              <Grid.Column key={produit.id} mobile={16} tablet={8} computer={4}>
                <Produit produit={produit} style={{ textAlign: 'center' }} />
              </Grid.Column>
            ))
          }
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  produits: state.produit.produits,
  categories: state.categorie.categories,
  filtres: state.filtre.filtres
});

export default connect(mapStateToProps)(ListeProduit);