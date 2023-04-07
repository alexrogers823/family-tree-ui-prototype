import React, { Fragment } from 'react';
import { Button, Link } from '../../components/common';
import { memberUrl } from '../../urls';

import { convertToDate } from '../../utils';

const MemberInformationSettings = props => {
  // Add member id for link
  return (
    <Fragment>
      <p>Username: {props.username}</p>
      <p>Member Name: <Link href={`${memberUrl}/${props.memberId}`}> {props.firstName} {props.lastName}</Link></p>
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