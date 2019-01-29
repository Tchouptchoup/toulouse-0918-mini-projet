import React, { Component } from 'react';
import { Dropdown, Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ajoutPanier, deduitPanier, supprimePanier } from '../actions/panier';

class Navbar extends Component {
  render() {
    const { panier, ajoutPanier, deduitPanier, supprimePanier } = this.props;
    console.log(panier)
    return (
      <div>
        <Menu style={{ borderRadius: '0rem' }} fixed="top">
          <Menu.Item as={Link} to="/" style={{ cursor: 'pointer' }}>Home</Menu.Item>
          <Dropdown text='Mon Compte' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>Mes commandes</Dropdown.Item>
              <Dropdown.Item>Mes données personnelles</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Se déconnecter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'>
            <Dropdown icon="shopping basket" pointing className='link item' closeOnSelect={false}>
              <Dropdown.Menu textAlign="center">
                {panier.length > 0
                  ?
                  panier.map(produit => (
                    <Dropdown.Item>
                      {produit.name}{' '}
                      <Button style={{ background: "white" }} onClick={() => deduitPanier(produit)}>-</Button>
                      <span>{produit.quantite}</span>
                      <Button style={{ background: "white" }} onClick={() => ajoutPanier(produit)}>+</Button>
                      {produit.quantite * produit.price}{' '}€
                      <Button style={{ background: "white" }} icon="close" onClick={() => supprimePanier(produit)}></Button>
                    </Dropdown.Item>
                  ))
                  :
                  <Dropdown.Item>Il n'y a rien dans votre panier</Dropdown.Item>
                }
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  panier: state.panier.panier
});

const mapDispatchToProps = {
  ajoutPanier, deduitPanier, supprimePanier
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
