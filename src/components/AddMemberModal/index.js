import React from 'react';
import Modal from '../common/Modal';

const AddMemberModal = props => {
  return (
    <Modal>
      <h1>Add Family Member</h1>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Middle Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Suffix" />
      <input type="text" placeholder="Preferred Name" />
      <input type="text" placeholder="Related Family Member" />
      <input type="text" placeholder="Relation" />
      <input type="text" placeholder="DOB" />
      <input type="text" placeholder="Spouse (if applicable)" />
      <input type="text" placeholder="Photo" />
      <input type="text" placeholder="Place of Birth" />
      <input type="text" placeholder="Place of Residence (if alive)" />
    </Modal>
  )
}

export default AddMemberModal;