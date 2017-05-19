import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {CardActions} from 'material-ui/Card';

import Form from '../../organisms/Form';

import './AuthSecondStep.css';

const radioStyle = {
  marginTop: '1rem',
  width: 'auto'
};

class AuthSecondStep extends Component {
  render() {
    const { onSubmit, onChange, onClickGoBack, state: { birthDate, gender } } = this.props;

    return (
      <Form title="Step 2" onSubmit={onSubmit}>
        <TextField
          name="birthDate"
          hintText="1991-07-13"
          floatingLabelText="Birth date"
          floatingLabelFixed={true}
          type="text"
          value={birthDate}
          onChange={onChange}
        />
        <RadioButtonGroup className="gender-options" name="gender" onChange={onChange} valueSelected={gender}>
          <RadioButton
            value="male"
            label="Male"
            style={radioStyle}
          />

          <RadioButton
            value="female"
            label="Female"
            style={radioStyle}
          />
        </RadioButtonGroup>

        <CardActions>
          <RaisedButton className="form__submit" primary label="Submit" type="submit" />
          <RaisedButton
            secondary
            fullWidth
            className="go-back-button"
            label="Go back to Step 1"
            type="button"
            onClick={onClickGoBack} />
        </CardActions>
      </Form>
    );
  }
}

AuthSecondStep.propTypes = {
  onChange: PropTypes.func,
  onClickGoBack: PropTypes.func,
  onSubmit: PropTypes.func,
  state: PropTypes.shape({
    birthDate: PropTypes.string,
    gender: PropTypes.string
  })
};

export default AuthSecondStep;
