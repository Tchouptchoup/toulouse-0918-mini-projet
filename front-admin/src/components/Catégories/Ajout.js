import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import Notifications, { notify } from 'react-notify-toast';
import { listeCategories } from '../../actions/categorie';

class Ajout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      slug: ''
    }
  }

  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      slug: event.target.value.split(' ').join('-').toLowerCase()
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { listeCategories } = this.props;
    axios.post('api/categorie/add', this.state)
      .then(res => res.data)
      .then(this.setState({ name: '' }))
      .then(res => listeCategories(res))
      .then(notify.show('Votre catégorie a été ajoutée', "success", 2000))
      .catch(err => console.error(err))
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field width={9}>
            <label for='name' style={{ marginBottom: '15px' }}>Ajouter une catégorie</label>
            <input
              placeholder='Nom de la catégorie'
              name='name'
              onChange={this.updateField}
              id='name'
              value={name}
              type='text'
            />
          </Form.Field>
          <Button type='submit'>Valider</Button>
        </Form>
        <Notifications />
      </div>
    );
  }
}

const mapDispatchToProps = {
  listeCategories
}

export default connect(
  null,
  mapDispatchToProps
)(Ajout);