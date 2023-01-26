import React, { useState } from 'react';
import {
    Radio,
    RadioGroup as MuiRadioGroup,
    FormLabel,
    FormControlLabel
} from '@mui/material';
import { Controller } from 'react-hook-form';

const RadioGroup = props => {
  return (
    <Controller 
      name={props.keyLabel}
      control={props.control}
      render={({field}) => {
        return (
          <>
            <FormLabel id={props.id || "member-radio-group"}>{props.label}</FormLabel>
            <MuiRadioGroup
              row
              aria-labelledby="member-radio-buttons-group-label"
              name="member-radio-buttons-group"
              { ...field }
              >
              {props.options.map(option => <FormControlLabel value={option} control={<Radio />} label={option} />)}
            </MuiRadioGroup>
          </>
        )
      }}
    />
  )
}

export default RadioGroup;