import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addFiltreCat, removeFiltreCat } from '../actions/filtre';

class Filtre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  checkedBox = (id) => {
    const { isChecked } = this.state;
    const { addFiltreCat, removeFiltreCat } = this.props
    this.setState({ isChecked: !isChecked })
    if (!isChecked) {
      addFiltreCat(id)
    }
    else {
      removeFiltreCat(id)
    }
  }

  render() {
    const { isChecked } = this.state;
    const { categorie: { id, name } } = this.props;
    return (
      <div>
        <Checkbox label={name} value={id} checked={isChecked ? true : false} onChange={() => this.checkedBox(id)} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addFiltreCat, removeFiltreCat
}

export default connect(
  null,
  mapDispatchToProps
)(Filtre);
