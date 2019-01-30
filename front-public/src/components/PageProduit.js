import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Image, List, Button } from 'semantic-ui-react';
import { formatText } from '../helpers/formatText';
import { connect } from 'react-redux';
import { ajoutPanier } from '../actions/panier';

class PageProduit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produit: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/produit/${this.props.match.params.id}`)
      .then(res => this.setState({ produit: res.data }))
      .catch(err => console.error(err))
  }

  render() {
    const { ajoutPanier } = this.props;
    const { produit: { brand, name, description, picture, price, stock } } = this.state;
    return (
      <div>
        <Grid style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '50px', marginRight: '50px' }}>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image src={picture} size="large" centered />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <List>
              <List.Item style={{ textAlign: 'center', fontSize: '2rem' }}>
                {name}
              </List.Item>
              <List.Item style={{ marginTop: '20px' }}>
                <b>Marque : </b>{brand}
              </List.Item>
              <List.Item style={{ marginTop: '20px' }}>
                <b>Prix : </b>{price}{' '}€
              </List.Item>
              <List.Item style={{ marginTop: '20px' }}>
                <b>Description : </b>
                <div style={{ marginTop: '10px' }}>{description && formatText(description)}</div>
              </List.Item>
              <List.Item style={{ marginTop: '40px' }}>
                {stock > 0
                  ?
                  <Button floated="right" onClick={() => ajoutPanier(this.state.produit)}>Ajouter au panier</Button>
                  :
                  <p textAlign="right"><b>Ce produit n'est plus en stock.</b></p>
                }
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


const mapDispatchToProps = {
  ajoutPanier
}

export default connect(
  null,
  mapDispatchToProps
)(PageProduit);
