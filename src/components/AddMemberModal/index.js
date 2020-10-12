import React from 'react';
import Modal from '../common/Modal';

const AddMemberModal = props => {
  return (
    <Modal>
      <h1>Add Family Member</h1>
      <p>First Name</p>
      <p>Middle Name</p>
      <p>Last Name</p>
      <p>Suffix</p>
      <p>Preferred Name</p>
      <p>Related Family Member</p>
      <p>Relation</p>
      <p>DOB</p>
      <p>Spouse (if applicable)</p>
      <p>Photo</p>
      <p>Place of Birth</p>
      <p>Place of Residence (if alive)</p>
    </Modal>
  )
}

export default AddMemberModal;