import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Profile from 'components/templates/Profile';

class ProfileContainer extends Component {
  render () {
      return <Profile {...this.props} />;
  }
}

ProfileContainer.propTypes = {
  auth: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    auth: state.auth
  }, ownProps));

export default connect(mapStateToProps)(ProfileContainer);
