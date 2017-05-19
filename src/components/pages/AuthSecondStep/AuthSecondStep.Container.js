import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onSubmitStep2 } from 'actions/auth';
import AuthSecondStep from 'components/templates/AuthSecondStep';

class AuthSecondStepContainer extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.auth.step2;

    this.onChange = this.onChange.bind(this);
    this.onClickGoBack = this.onClickGoBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClickGoBack(e) {
    e.stopPropagation();

    this.props.history.goBack();
  }

  onSubmit() {
    this.props.onSubmit(this.state);
  }

  render () {
    return (
      <AuthSecondStep
        {...this.props}
        state={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onClickGoBack={this.onClickGoBack}
      />
    );
  }
}

AuthSecondStepContainer.propTypes = {
  auth: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    auth: state.auth
  }, ownProps));

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: onSubmitStep2
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthSecondStepContainer);
