import React, { Fragment } from 'react';
import Button from '../../components/common/Button';

import { convertToDate } from '../../utils';

const MemberInformationSettings = props => {
  return (
    <Fragment>
      <p>Username/Member Name: {props.firstName} {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Birthplace: {props.birthplace}</p>
      <p>Residence: {props.residence}</p>
      <p>Profile Photo: (photo here)</p>
      <p>Profile Created: {convertToDate(props.createdOn)}</p>
      <p>Last logged in: {convertToDate(props.lastLoggedIn)}</p>
      <Button>Change Password</Button>
    </Fragment>
  )
};

// TODO: Add button to change profile picture 

export default MemberInformationSettings;