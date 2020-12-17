import React, { Fragment } from 'react';
import Button from '../common/Button';

const UserSettings = props => {
  return (
    <Fragment>
      <h1>User Settings Page</h1>
      <p>Username/Member Name: {props.firstName} {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Last logged in: October 24</p>
      <Button>Change Password</Button>
    </Fragment>
  )
};

export default UserSettings;