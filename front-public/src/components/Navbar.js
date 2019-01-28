import React, { Component } from 'react';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu style={{ borderRadius: '0rem' }}>
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
            <Menu.Item>
              <Icon style={{ cursor: 'pointer' }} disabled name='shopping basket' size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;