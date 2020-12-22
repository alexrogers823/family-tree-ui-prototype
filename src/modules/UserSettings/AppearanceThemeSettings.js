import React, { Fragment, useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';

import Button from '../../components/common/Button';

const AppearanceThemeSettings = props => {
  const [value, setValue] = useState('light');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Appearance Theme</FormLabel>
        <RadioGroup aria-label="theme" name="color-theme" value={value} onChange={handleChange}>
          <FormControlLabel value="light" control={<Radio />} label="Light Theme" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark Theme" />
        </RadioGroup>
        <Button>Save</Button>
      </FormControl>
    </Fragment>
  )
};

// TODO: Turn paragraphs into radio buttons 

export default AppearanceThemeSettings;