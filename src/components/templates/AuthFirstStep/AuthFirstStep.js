import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {CardActions} from 'material-ui/Card';

import Form from '../../organisms/Form';

class AuthFirstStep extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: ''
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form title="Step 1">
        <TextField
          name="name"
          hintText="John Doe"
          floatingLabelText="Name"
          floatingLabelFixed={true}
          value={this.state.name}
          onChange={e => this._onChange(e)}
        />
        <TextField
          name="age"
          hintText="100"
          floatingLabelText="Age"
          floatingLabelFixed={true}
          type="number"
          value={this.state.age}
          onChange={this._onChange}
        />

        <CardActions>
          <RaisedButton label="Next" />
        </CardActions>
      </Form>
    );
  }
}

export default AuthFirstStep;
