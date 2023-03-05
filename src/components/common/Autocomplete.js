import React from 'react';
import { 
    TextField,
    Autocomplete as MuiAutocomplete
} from '@mui/material';

const Autocomplete = props => {
  return (
    <MuiAutocomplete
      freeSolo
      id="autocomplete-field"
      disableClearable
      options={props.options}
      // sx={{ width: props.width }}
      renderInput={(params) => (
        <TextField
          {...params}
          id={props.keyLabel}
          label={props.label}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue} //not working
          variant="filled"
          type={ props.type || "text" }
          multiline={ props.multiline || false }
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          { ...props }
        />
      )}
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