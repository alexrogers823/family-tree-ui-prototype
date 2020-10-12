import React from 'react';
import Modal from '../common/Modal';

const AddEventModal = props => {
  return (
    <Modal>
      <h1>Add an event</h1>
      <p>Date (MM/DD/YYYY)</p>
      <p>Event</p>
      <button>POST IT!</button>
    </Modal>
  );
};

export default AddEventModal;