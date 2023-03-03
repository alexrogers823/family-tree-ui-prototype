import * as React from 'react';
import Button from '@mui/material/Button';

const UploadButton = props => {
  return (
   <Button variant="contained" component="label">
    {props.title}
    <input hidden accept="image/*" type="file" />
   </Button>   
  )
}

export default UploadButton;