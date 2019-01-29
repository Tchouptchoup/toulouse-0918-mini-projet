import React from 'react';
import { Grid, Divider, List, Icon } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Divider />
    <Grid style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Grid.Row textAlign="center" >
        <Grid.Column>
          <List horizontal>
            <List.Item>
              <Icon disabled name='facebook square' size="large" link/>
            </List.Item>
            <List.Item>
              <Icon disabled name='instagram' size="large" link/>
            </List.Item>
            <List.Item>
              <Icon disabled name='twitter square' size="large" link/>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center">
        <Grid.Column>
          Made by Maitetxu for WCS
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Footer;
