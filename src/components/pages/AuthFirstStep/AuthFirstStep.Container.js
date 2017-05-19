import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onSubmitStep1 } from 'actions/auth';
import AuthFirstStep from 'components/templates/AuthFirstStep';

class AuthFirstStepContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit() {
    this.props.onSubmit(this.state);

    this.props.history.push('step-2');
  }

  render () {
    return (
      <AuthFirstStep
        {...this.props}
        state={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

AuthFirstStepContainer.propTypes = {
  auth: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    auth: state.auth
  }, ownProps));

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: onSubmitStep1
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthFirstStepContainer);
