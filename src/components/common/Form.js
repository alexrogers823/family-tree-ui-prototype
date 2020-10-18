import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Form = props => {
  // const [open, setOpen] = useState(true);

  return (
    <div>
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Test</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Testing the text here
          </DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Test Button
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default Form;