import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import Button from './Button';

// export const TextArea = (props) => (
//   <TextField
//     autoFocus
//     margin="dense"
//     id="name"
//     label={props.label || ""}
//     placeholder={props.placeholder || ""}
//     variant="filled"
//     type={props.type || "text"}
//     {...props}
//   />
// );

export const TextArea = props => (
  <Box
    component="form"
  >
    <TextField 
      label={props.label}
      placeholder={props.placeholder} 
      defaultValue={props.defaultValue}
      variant="standard" 
      multiline={props.multiline || false}
    />
  </Box>
)

const Form = props => {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({});

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
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={props.isDeceased} onChange={props.deceased} />} label="Check if deceased" />
        </FormGroup>
        {props.button &&
          <Button 
            color="primary"
            onClick={e => {
              if (props.onClick) {
                props.onClick(e.target.value);
              }
              props.closeModal()
            }}
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