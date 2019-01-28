import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Liste des produits'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Link to="/liste-des-produits">
                <Menu.Item
                  name='Liste des produits'
                  active={activeItem === 'Liste des produits'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/ajouter-un-produit">
                <Menu.Item
                  name='Ajouter un produit'
                  active={activeItem === 'Ajouter un produit'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/gerer-les-categories">
                <Menu.Item
                  name='Gérer les catégories'
                  active={activeItem === 'Gérer les catégories'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Menu.Item
                name='Liste des commandes'
                active={activeItem === 'Liste des commandes'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Navbar;