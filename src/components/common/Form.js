import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const TextArea = (props) => (
  <TextField
    autoFocus
    margin="dense"
    id="name"
    label={props.label}
    placeholder={props.placeholder || ""}
    multiline={props.multiline || true}
    variant="filled"
    type="email"
    fullWidth
  />
);

const Form = props => {
  // const [open, setOpen] = useState(true);
  console.log(props.children);

  return (
    <div>
      <Dialog open={true} aria-labelledby="form-dialog-title">
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
    </div>
  )
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool
}

export default Form;