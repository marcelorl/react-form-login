import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle} from 'material-ui/Card';

import './Form.css';

class Form extends Component {
  render () {
    const {children, title} = this.props;

    return (
      <Card className="login-card">
        <CardTitle title={title} />
        <form className="login-card__form">
          {children}
        </form>
      </Card>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Form;
