import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ajoutPanier } from '../actions/panier';
import { connect } from 'react-redux';

class Produit extends Component {
  render() {
    const { picture, name, brand, price, id, slug, stock } = this.props.produit;
    const { ajoutPanier } = this.props;
    return (
      <Card centered style={{ marginBottom: '20px' }}>
        <Image as={Link} to={`/${slug}/${id}`} src={picture} size="medium" style={{ cursor: 'pointer' }} />
        <Card.Content>
          <Card.Header as={Link} to={`/${slug}/${id}`} style={{ cursor: 'pointer', color: 'black' }}>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{brand}</span>
          </Card.Meta>
          <Card.Description>{price}{' '}€</Card.Description>
        </Card.Content>
        {stock > 0
          ?
          <Card.Content extra textAlign="center" style={{ cursor: 'pointer' }} onClick={() => ajoutPanier(this.props.produit)}>
            Ajouter au panier{' '}<Icon disabled name='shop' />
          </Card.Content>
          :
          <Card.Content extra textAlign="center">
            Ce produit n'est plus en stock
        </Card.Content>
        }
      </Card>
    );
  }
}

const mapDispatchToProps = {
  ajoutPanier
}

export default connect(
  null,
  mapDispatchToProps
)(Produit);