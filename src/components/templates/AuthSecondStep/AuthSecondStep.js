import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {CardActions} from 'material-ui/Card';

import Form from '../../organisms/Form';

const radioStyle = {
  marginTop: '1rem',
  width: 'auto'
};

class AuthSecondStep extends Component {
  constructor() {
    super();

    this.state = {
      birthDate: '',
      gender: ''
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e, index, value) {
    console.log(e.target, value, index);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form title="Step 2">
        <TextField
          name="birthDate"
          hintText="1991-07-13"
          floatingLabelText="Birth date"
          floatingLabelFixed={true}
          type="text"
          value={this.state.birthDate}
          onChange={this._onChange}
        />
        <RadioButtonGroup className="gender-options" name="gender" onChange={this._onChange}>
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
          <RaisedButton label="Submit" />
        </CardActions>
      </Form>
    );
  }
}

export default AuthSecondStep;
