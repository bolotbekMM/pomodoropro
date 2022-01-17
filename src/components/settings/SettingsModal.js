import React from 'react';
import Modal from '../UI/modal/Modal';
import SettingsForm from './SettingsForm/SettingsForm';

const SettingsModal = (props) => {
  
  return (
    <Modal onCloseModal={props.onCloseModal}>

      <SettingsForm onCloseModal={props.onCloseModal} />
      
    </Modal>
  );
};

export default SettingsModal;
