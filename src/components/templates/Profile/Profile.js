import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';

import './Profile.css';

class Profile extends Component {
  render() {
    const { auth: { step1: { name, age }, step2: { birthDate, gender } } } = this.props;

    return (
      <Card className="profile">
        <CardTitle title="User Profile" />
        <Divider />
        <div>
          <div className="profile__row">
            <div className="profile__row__data">
              <label>Name:</label>
              <div>{name}</div>
            </div>

            <div className="profile__row__data">
              <label>Age:</label>
              <div>{age}</div>
            </div>
          </div>

          <div className="profile__row">
            <div className="profile__row__data">
              <label>Birth Date:</label>
              <div>{birthDate}</div>
            </div>

            <div className="profile__row__data">
              <label>Gender:</label>
              <div>{gender}</div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  birthDate: PropTypes.string,
  gender: PropTypes.string
};

export default Profile;
