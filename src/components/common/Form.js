import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import {
  Controller,
  useForm,
} from 'react-hook-form';
import Button from './Button';

export const TextArea = props => {
  return (
    <Controller 
      name={props.keyLabel}
      control={props.control}
      render={({ field }) => {
        return (
          <TextField 
            { ...field }
            margin="dense"
            id={props.keyLabel}
            label={props.label}
            placeholder={props.placeholder} 
            defaultValue={props.defaultValue}
            variant="filled" 
            multiline={props.multiline || false}
            { ...props }
          />
        )}}
    />
  )
};

const Form = props => {
  const [open, setOpen] = useState(false);

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
      <form onSubmit={props.onSubmit}>
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={props.isDeceased} onChange={props.onChange} />} label="Check if deceased" />
          </FormGroup>
          {props.button &&
            <Button 
              type="submit"
              color="primary"
              onClick={e => {
                if (props.onClick) {
                  console.log('saved value', e.target.value);
                  props.onClick(e.target.value);
                }
                props.closeModal()
              }}
            >
              {props.button}
            </Button>
          }
        </DialogActions>
      </form>
    </Dialog>
  );
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