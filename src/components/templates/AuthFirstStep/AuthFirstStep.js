import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {CardActions} from 'material-ui/Card';

import Form from '../../organisms/Form';

class AuthFirstStep extends Component {
  render() {
    return (
      <Form title="Step 1">
        <TextField
          hintText="John Doe"
          floatingLabelText="Name"
          floatingLabelFixed={true}
        />
        <TextField
          hintText="100"
          floatingLabelText="Age"
          floatingLabelFixed={true}
          type="number"
        />

        <CardActions>
          <RaisedButton label="Next" />
        </CardActions>
      </Form>
    );
  }
}

export default AuthFirstStep;
