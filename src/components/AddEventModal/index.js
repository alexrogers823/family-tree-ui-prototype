import React from 'react';
import Modal from '../common/Modal';

const AddEventModal = props => {
  return (
    <Modal>
      <h1>Add an event</h1>
      <input type="text" placeholder="Date (MM/DD/YYYY)" />
      <textarea placeholder="Event" />
      <button>POST IT!</button>
    </Modal>
  );
};

export default AddEventModal;