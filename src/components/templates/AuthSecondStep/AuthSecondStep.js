import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {CardActions} from 'material-ui/Card';

import Form from '../../organisms/Form';

class AuthSecondStep extends Component {
  render() {
    return (
      <Form title="Step 2">
        <DatePicker
          hintText="1991-07-13"
        />
        <SelectField
          className="text-align-left"
          floatingLabelText="Gender"
          floatingLabelFixed={true}
        >
          <MenuItem value="male" primaryText="Male" />
          <MenuItem value="female" primaryText="Female" />
        </SelectField>

        <CardActions>
          <RaisedButton label="Submit" />
        </CardActions>
      </Form>
    );
  }
}

export default AuthSecondStep;
