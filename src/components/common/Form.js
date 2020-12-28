import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';

export const TextArea = (props) => (
  <TextField
    autoFocus
    margin="dense"
    id="name"
    label={props.label || ""}
    placeholder={props.placeholder || ""}
    variant="filled"
    type={props.type || "text"}
    {...props}
  />
);

const Form = props => {
  const [open, setOpen] = useState(false);

  console.log('props', props);

  useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen]);

  return (
    <Dialog 
      open={open || false} 
      onClose={props.closeModal}
      aria-labelledby="form-dialog-title"
      {...props}
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
      <DialogActions>
        {props.button &&
          <Button 
            color="primary"
            onClick={props.closeModal}
          >
            {props.button}
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string,
}

export default Form;