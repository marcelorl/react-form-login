import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle} from 'material-ui/Card';

import './Form.css';

class Form extends Component {
  render () {
    const {children, onSubmit, title} = this.props;

    return (
      <Card className="login-card">
        <CardTitle title={title} />
        <form className="login-card__form" onSubmit={e => { e.preventDefault(); onSubmit() }}>
          {children}
        </form>
      </Card>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Form;
