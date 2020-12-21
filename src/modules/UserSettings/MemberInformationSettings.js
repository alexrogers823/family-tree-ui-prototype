import React, { Fragment } from 'react';
import Button from '../../components/common/Button';

const MemberInformationSettings = props => {
  return (
    <Fragment>
      <p>Username/Member Name: {props.firstName} {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Birthplace: {props.birthplace}</p>
      <p>Residence: {props.residence}</p>
      <p>Profile Photo: (photo here)</p>
      <p>Profile Created: October 21</p>
      <p>Last logged in: October 24</p>
      <Button>Change Password</Button>
    </Fragment>
  )
};

// TODO: Add button to change profile picture 
// TODO: Use moment to format profile created and last logged in (similar to in Eros) 


export default MemberInformationSettings;