import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { listeCategories } from '../../actions/categorie';

class Liste extends Component {
  deleteCategory = () => {
    const { listeCategories } = this.props;
    const { id } = this.props.categorie;
    axios.delete(`api/categorie/suppression/${id}`)
      .then(res => listeCategories(res.data))
      .catch(err => console.error(err))
  }

  render() {
    const { name } = this.props.categorie;
    return (
      <div>
        <List>
          <List.Item style={{ marginTop: '10px', marginBottom: '10px' }}>
            <List.Content floated='left'>
              {name}
            </List.Content>
            <List.Content floated='right'>
              <Icon
                name='trash alternate'
                style={{ cursor: 'pointer' }}
                onClick={this.deleteCategory}
              />
            </List.Content>
          </List.Item>
        </List>
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
)(Liste);
