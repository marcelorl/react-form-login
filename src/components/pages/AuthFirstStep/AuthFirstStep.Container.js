import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onSubmitStep1 } from 'actions/auth';
import AuthFirstStep from 'components/templates/AuthFirstStep';

class AuthFirstStepContainer extends Component {
  componentDidMount() {

  }

  render () {
    return <AuthFirstStep {...this.props} />;
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
  onSubmitStep1
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthFirstStepContainer);
