import * as React from 'react';
import { Controller } from 'react-hook-form';
import { Button as MuiButton } from '@mui/material';

const UploadButton = props => {
  // return (
  //  <Button variant="contained" component="label">
  //   {props.title}
  //   <input hidden accept="image/*" type="file" />
  //  </Button>   
  // )

  return (
    <Controller 
      name={props.keyLabel}
      control={props.control}
      render={({ field }) => {
        return (
          <MuiButton 
            { ...field }
            variant="contained"
            component="label"
          >
            {props.label}
            <input hidden accept="image/*" type="file" />
          </MuiButton>
        )
      }}
    />
  )
}

export default UploadButton;