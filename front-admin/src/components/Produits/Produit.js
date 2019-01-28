import React, { Component } from 'react';
import {
  List, Icon, Image, ListDescription, Divider
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteProduct, openProduct } from '../../actions/produit';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Produit extends Component {

  deleteProduct = () => {
    const { deleteProduct } = this.props;
    const { id } = this.props.produit;
    axios.delete(`api/produit/suppression/${id}`)
      .then(res => deleteProduct(res.data, console.log(res.data)))
      .catch(err => console.error(err))
  }

  render() {
    const {
      produit: {
        id, brand, name, reference, stock, price, picture, category_id
      }, categories, openProduct
    } = this.props;
    const categorie = categories && categories.find(obj => obj.id === category_id);
    return (
      <div>
        <List>
          <List.Item style={{ marginTop: '10px', marginBottom: '10px' }}>
            <List.Content floated="left">
              <Image avatar src={picture} />
            </List.Content>
            <List.Content floated="left">
              <List.Header style={{ cursor: 'pointer' }} onClick={() => openProduct(id)}>
                {name}
              </List.Header>
              <ListDescription>
                <b>Référence :</b>
                {' '}
                {reference}{' '}/{' '}{brand}{' '}/{' '}{categorie && categorie.name}
              </ListDescription>
            </List.Content>
            <List.Content floated="right">
              <Icon
                name="trash alternate"
                style={{ cursor: 'pointer' }}
                onClick={this.deleteProduct}
              />
            </List.Content>
            <List.Content floated="right">
              <Icon
                onClick={() => openProduct(id)}
                name="edit alternate"
                style={{ cursor: 'pointer' }}
              />
            </List.Content>
            <List.Content floated="right">
              <List.Header>
                <b>Stock :</b>{' '}{stock}
              </List.Header>
              <ListDescription>
                <b>Prix :</b>{' '}{price}{' '}€
              </ListDescription>
            </List.Content>
          </List.Item>
        </List>
        <Divider />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categorie.categories
});

const mapDispatchToProps = {
  deleteProduct, openProduct
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Produit));
