import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';

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
  // const [open, setOpen] = useState(false);

  return (
      <Dialog 
        open={props.isOpen || false} 
        aria-labelledby="form-dialog-title"
        {...props}
        >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          {props.button &&
            <Button color="primary">
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