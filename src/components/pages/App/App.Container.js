import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import App from 'components/templates/App';

class AppContainer extends Component {
  render () {
    return <App {...this.props} />;
  }
}

AppContainer.propTypes = {
  logout: PropTypes.func
};

const mapStateToProps = state =>
  (Object.assign({
    auth: state.auth
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  logout: function() {}
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
