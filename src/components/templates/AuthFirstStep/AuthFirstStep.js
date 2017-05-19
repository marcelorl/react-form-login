import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {CardActions} from 'material-ui/Card';

import Form from '../../organisms/Form';

class AuthFirstStep extends Component {
  render() {
    const { onSubmit, onChange, state: { name, age } } = this.props;

    return (
      <Form title="Step 1" onSubmit={onSubmit}>
        <TextField
          name="name"
          hintText="John Doe"
          floatingLabelText="Name"
          floatingLabelFixed={true}
          value={name}
          onChange={e => onChange(e)}
        />
        <TextField
          name="age"
          hintText="100"
          floatingLabelText="Age"
          floatingLabelFixed={true}
          type="number"
          value={age}
          onChange={onChange}
        />

        <CardActions>
          <RaisedButton primary label="Next" type="submit" />
        </CardActions>
      </Form>
    );
  }
}

export default AuthFirstStep;
