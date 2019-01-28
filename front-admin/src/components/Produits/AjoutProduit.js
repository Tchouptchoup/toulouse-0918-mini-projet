import React, { Component } from 'react';
import {
  Grid, Segment, Form, Button, TextArea, Select
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../../style/Produit.scss';
import axios from 'axios';
import { addProduct } from '../../actions/produit';
import Notifications, { notify } from 'react-notify-toast';

class AjoutProduit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      name: '',
      slug: '',
      reference: '',
      description: '',
      stock: 0,
      price: 0.01,
      picture: null,
      category_id: ''
    };
  }

  updateField = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    if ([event.target.name][0] === 'name') {
      this.setState({ slug: event.target.value.split(' ').join('-').toLowerCase() })
    }
  }

  updateFieldPicture = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  updateFieldSelect = (event, data) => {
    this.setState({
      category_id: data.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    const textFields = ['brand', 'name', 'reference', 'slug', 'description', 'stock', 'price', 'category_id']
    textFields.forEach(field => {
      formData.append(field, this.state[field])
    })
    formData.append('picture', this.state.picture)
    const { addProduct } = this.props;
    axios.post('api/produit/ajout', formData)
      .then(res => addProduct(res.data))
      .then(notify.show('Votre produit a été ajouté', "success", 2000))
      .then(this.setState({
        brand: '',
        name: '',
        slug: '',
        reference: '',
        description: '',
        stock: 0,
        price: 0.01,
        picture: null,
        category_id: ''
      }))
      .catch(err => console.error(err))
  }

  render() {
    const { brand, name, reference, description, stock, price, picture } = this.state;
    const { categories } = this.props;
    const optionsCategories = categories.map(obj => ({ ...obj, value: obj.id, text: obj.name }));
    return (
      <div>
        <Grid>
          <Grid.Column stretched width={12} style={{ marginLeft: 'auto', marginRight: '15px', marginTop: '-180px' }}>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field width={7} required>
                  <label for="brand">Marque</label>
                  <input
                    placeholder="Marque"
                    id="brand"
                    value={brand}
                    name="brand"
                    type="text"
                    onChange={this.updateField}
                  />
                </Form.Field>
                <Form.Field width={7} required>
                  <label for="name">Nom du produit</label>
                  <input
                    placeholder="Nom du produit"
                    id="name"
                    value={name}
                    name="name"
                    type="text"
                    onChange={this.updateField}
                  />
                </Form.Field>
                <Form.Field width={7} required>
                  <label for="reference">Référence</label>
                  <input
                    placeholder="Référence"
                    id="reference"
                    value={reference}
                    name="reference"
                    type="text"
                    onChange={this.updateField}
                  />
                </Form.Field>
                <Form.Field required>
                  <label for="description">Description</label>
                  <TextArea
                    placeholder="Description"
                    rows={6}
                    id="description"
                    value={description}
                    name="description"
                    type="text"
                    onChange={this.updateField}
                  />
                </Form.Field>
                <Form.Field width={3} required>
                  <label for="stock">Stock</label>
                  <input
                    placeholder="Stock"
                    id="stock"
                    value={stock}
                    name="stock"
                    type="number"
                    onChange={this.updateField}
                  />
                </Form.Field>
                <Form.Field width={3} required>
                  <label for="price">Prix</label>
                  <input
                    placeholder="Prix"
                    id="price"
                    value={price}
                    name="price"
                    type="number"
                    onChange={this.updateField}
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                  />
                </Form.Field>
                <Form.Field width={7} required>
                  <label for="picture" className="ui icon button">
                    <i class="upload icon"></i>{' '}
                    {picture ? picture.name : 'Ajouter une photo'}
                  </label>
                  <input
                    type="file"
                    id="picture"
                    name="picture"
                    onChange={this.updateFieldPicture}
                    style={{ display: 'none' }}
                  />
                </Form.Field>
                <Form.Field width={7} required>
                  <label for="category_id">Catégorie</label>
                  <Select
                    placeholder="Selectionner une catégorie"
                    options={optionsCategories}
                    id="category_id"
                    name="category_id"
                    onChange={this.updateFieldSelect}
                  />
                </Form.Field>
                <Button type="submit">Valider</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
        <Notifications />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categorie.categories
});

const mapDispatchToProps = {
  addProduct
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AjoutProduit);
