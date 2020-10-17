import React from 'react';
import Modal from '../common/Modal';

const EditMemberPageModal = props => {
  return (
    <Modal>
      <input type="text" placeholder="(Photo here)" />
      <input type="text" placeholder="Birth (DOB)" />
      <input type="text" placeholder="Death" />
      <input type="text" placeholder="Place of Birth" />
      <input type="text" placeholder="Place of Residence" />
      <input type="text" placeholder="Bio" />
      <input type="text" placeholder="Spouse" />
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Middle Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Preferred Name" />
      <input type="text" placeholder="Parents (if blank)" />
      <input type="text" placeholder="Suffix" />
      <input type="text" placeholder="Children (if applicable)" />
    </Modal>
  );
};

export default EditMemberPageModal;