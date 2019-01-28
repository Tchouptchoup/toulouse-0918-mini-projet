import React, { Component } from 'react';
import {
  Form, Button, TextArea, Select, Modal, Image, Grid
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeProduct, editProduct } from '../../actions/produit';
import axios from 'axios';

class FicheProduit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
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

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      const {
        produitWithID:
        {
          brand, name, slug, reference, description, stock, price, category_id, id
        }
      } = this.props;
      this.setState({
        id,
        brand,
        name,
        slug,
        reference,
        description,
        stock,
        price,
        category_id
      });
    }
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
    const { picture, id } = this.state;
    const formData = new FormData()
    const textFields = ['brand', 'name', 'reference', 'slug', 'description', 'stock', 'price', 'category_id']
    textFields.forEach(field => {
      formData.append(field, this.state[field])
    })
    if (picture) {
      formData.append('picture', this.state.picture)
    }
    const { editProduct, closeProduct } = this.props;
    axios.put(`api/produit/modification/${id}`, formData)
      .then(res => editProduct(res.data))
      .then(closeProduct)
      .catch(err => console.error(err))
  }


  render() {
    const { isOpen, categories, closeProduct } = this.props;
    const {
      brand, name, reference, description, stock, price, category_id
    } = this.state;
    const { picture } = this.props.produitWithID
    console.log(this.state)
    const optionsCategories = categories.map(obj => ({ ...obj, value: obj.id, text: obj.name }));
    return (
      <div>
        <Modal onClose={closeProduct} open={isOpen} size="large">
          <Form onSubmit={this.handleSubmit}>
            <Grid style={{ marginTop: '30px', marginLeft: '30px', marginRight: '30px' }} columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Image src={picture} size='medium' centered />
                  <Form.Field required>
                    <label htmlFor="picture" className="ui icon button" style={{ marginTop: '5px' }}>
                      <i className="upload icon" />{' '}
                      {this.state.picture ? this.state.picture.name : 'Changer de photo'}
                    </label>
                    <input
                      type="file"
                      id="picture"
                      name="picture"
                      onChange={this.updateFieldPicture}
                      style={{ display: 'none' }}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field required>
                    <label htmlFor="brand">Marque</label>
                    <input
                      placeholder="Marque"
                      id="brand"
                      value={brand}
                      name="brand"
                      type="text"
                      onChange={this.updateField}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="name">Nom du produit</label>
                    <input
                      placeholder="Nom du produit"
                      id="name"
                      value={name}
                      name="name"
                      type="text"
                      onChange={this.updateField}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="reference">Référence</label>
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
                    <label htmlFor="stock">Stock</label>
                    <input
                      placeholder="Stock"
                      id="stock"
                      value={stock}
                      name="stock"
                      type="number"
                      onChange={this.updateField}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="price">Prix</label>
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
                  <Form.Field required>
                    <label htmlFor="category_id">Catégorie</label>
                    <Select
                      placeholder="Selectionner une catégorie"
                      options={optionsCategories}
                      id="category_id"
                      name="category_id"
                      onChange={this.updateFieldSelect}
                      value={category_id}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field required>
                    <label htmlFor="description">Description</label>
                    <TextArea
                      placeholder="Description"
                      rows={25}
                      id="description"
                      value={description}
                      name="description"
                      type="text"
                      onChange={this.updateField}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid colum={1} textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  <Button type="submit" style={{ marginBottom: '30px', marginRight: '5px' }}>Valider</Button>
                  <Button type="button" style={{ marginBottom: '30px', marginLeft: '5px' }} onClick={closeProduct} >Annuler</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.produit.isOpen,
  produitWithID: state.produit.produitWithID,
  categories: state.categorie.categories
});

const mapDispatchToProps = {
  closeProduct, editProduct
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheProduit));
