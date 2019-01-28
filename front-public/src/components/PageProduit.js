import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Image, List } from 'semantic-ui-react';
import { formatText } from '../helpers/formatText';

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
    const { produit: { brand, name, description, picture, price } } = this.state;
    return (
      <div>
        <Grid style={{ marginTop: '30px', marginLeft: '50px', marginRight: '50px' }}>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image src={picture} size="large" centered/>
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
                <p style={{ marginTop: '10px' }}>{description && formatText(description)}</p>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default PageProduit;
