import React from 'react';
import { Grid, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CommandeValidee = () => (
  <div>
    <Grid verticalAlign="middle" style={{ textAlign: 'center', margin: '50px' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          Merci pour votre commande !{' '}<Icon name="check" size="big" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Link to="/"><Button style={{ cursor: 'pointer' }}>Retour à l'accueil</Button></Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default CommandeValidee;
