import React, { Component } from 'react';
import {
  List, Image, ListDescription, Divider
} from 'semantic-ui-react';

class ProduitPanier extends Component {
  render() {
    const {
      produit: {
        brand, name, reference, quantite, price, picture
      }
    } = this.props;
    return (
      <div>
        <List>
          <List.Item style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}>
            <List.Content floated="left">
              <Image avatar src={picture} />
            </List.Content>
            <List.Content floated="left">
              <List.Header style={{ cursor: 'pointer' }}>
                {name}
              </List.Header>
              <ListDescription>
                <b>Référence :</b>
                {' '}
                {reference}{' '}/{' '}{brand}{' '}
              </ListDescription>
            </List.Content>
            <List.Content floated="right">
              <List.Header>
                <b>Quantité :</b>{' '}{quantite}
              </List.Header>
              <ListDescription>
                <b>Prix :</b>{' '}{quantite * price}{' '}€
              </ListDescription>
            </List.Content>
          </List.Item>
        </List>
        <Divider />
      </div>
    );
  }
}

export default ProduitPanier;
