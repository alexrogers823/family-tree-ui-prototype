import React from 'react';
import Modal from '../common/Modal';

const EditMemberPageModal = props => {
  return (
    <Modal>
      <p>(Photo here)</p>
      <p>Birth (DOB)</p>
      <p>Death</p>
      <p>Place of Birth</p>
      <p>Place of Residence</p>
      <p>Bio</p>
      <p>Spouse</p>
      <p>First Name</p>
      <p>Middle Name</p>
      <p>Last Name</p>
      <p>Preferred Name</p>
      <p>Parents (if blank)</p>
      <p>Suffix</p>
      <p>Children (if applicable)</p>
    </Modal>
  );
};

export default EditMemberPageModal;