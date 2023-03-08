import React from 'react';
import { 
    TextField,
    Autocomplete as MuiAutocomplete
} from '@mui/material';
import { Controller } from 'react-hook-form';

const Autocomplete = props => {
  return (
    <Controller
      name={props.keyLabel}
      control={props.control}
      render={({ field }) => {
        return (
          <MuiAutocomplete
            { ...field }
            freeSolo
            id="autocomplete-field"
            options={props.options}
            value=''
            disableClearable
            autoSelect
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                id={props.keyLabel}
                label={props.label}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue || "test"} //not working
                variant="filled"
                type={ props.type || "text" }
                multiline={ props.multiline || false }
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
            { ...props }
          />
        )
      }} 
    />

  )

//   return (
//     <MuiAutocomplete
//   disablePortal
//   id="combo-box-demo"
//   options={props.options}
//   sx={{ width: 300 }}
//   renderInput={(params) => <TextField {...params} label="Movie" />}
// />
//   )
}

export default Autocomplete;