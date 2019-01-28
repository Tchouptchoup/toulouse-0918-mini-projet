import React from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Ajout from './Ajout';
import Liste from './Liste';
import '../../style/Categorie.scss';

const Categorie = (props) => (
  <div>
    <Grid>
      <Grid.Column stretched width={12} style={{ marginLeft: 'auto', marginRight: '15px', marginTop: '-180px' }}>
        <Segment>
          <Ajout />
          <Divider />
          <p>Liste des catégories</p>
          {props.categories && props.categories.map(categorie => (
            <Liste categorie={categorie} />
          ))}
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);


const mapStateToProps = state => ({
  categories: state.categorie.categories
});

export default connect(mapStateToProps)(Categorie);
