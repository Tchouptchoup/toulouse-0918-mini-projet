import React, { Component } from 'react';
import { Dropdown, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { plusPanier, deduitPanier, supprimePanier, openPanier } from '../actions/panier';
import '../styles/Dropdown.scss';

class Navbar extends Component {

  render() {
    const { panier, plusPanier, deduitPanier, supprimePanier, isOpen, openPanier } = this.props;
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
            <Dropdown icon="shopping basket" pointing className='link item CartDropdown' open={isOpen} onClick={openPanier}>
              <Dropdown.Menu>
                {panier.length > 0
                  ?
                  panier.map(produit => (
                    <Dropdown.Item key={produit.id}>
                      {produit.name}{' '}
                      <Button style={{ background: "white" }} onClick={() => deduitPanier(produit)}>-</Button>
                      <span>{produit.quantite}</span>
                      <Button style={{ background: "white" }} onClick={() => plusPanier(produit)}>+</Button>
                      {produit.quantite * produit.price}{' '}€
                      <Button style={{ background: "white" }} icon="close" onClick={() => supprimePanier(produit)}></Button>
                    </Dropdown.Item>
                  ))
                  :
                  <Dropdown.Item>Il n'y a rien dans votre panier</Dropdown.Item>
                }
                {panier.length > 0
                  ?
                  <Dropdown.Divider />
                  :
                  ''
                }
                {panier.length > 0
                  ?
                  <Link to="/mon-panier" style={{ color: 'black' }}>
                    <Dropdown.Item style={{ textAlign: 'center' }}>
                      Voir mon panier
                    </Dropdown.Item>
                  </Link>
                  :
                  ''
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
  panier: state.panier.panier,
  isOpen: state.panier.isOpen
});

const mapDispatchToProps = {
  plusPanier, deduitPanier, supprimePanier, openPanier
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
