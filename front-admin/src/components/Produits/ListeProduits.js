import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import Produit from './Produit';
import FicheProduit from './FicheProduit';

const ListeProduits = (props) => (
  <div>
    <Grid>
      <Grid.Column stretched width={12} style={{ marginLeft: 'auto', marginRight: '15px', marginTop: '-180px' }}>
        <Segment>
          {props.products && props.products.map(product => (
            <Produit produit={product} />
          ))}
          <FicheProduit />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  products: state.produit.products
});

export default connect(mapStateToProps)(ListeProduits);
