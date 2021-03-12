import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';

import {
  changeAppearance
} from './redux/actions';

import Button from '../../components/common/Button';

const AppearanceThemeSettings = props => {
  // const [value, setValue] = useState('light');
  const dispatch = useDispatch();

  const theme = useSelector(state => state.usersReducer.theme);

  const handleChange = (event) => {
    dispatch(changeAppearance(event.target.value));
  }

  console.log('value', theme);

  return (
    <Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Appearance Theme</FormLabel>
        <RadioGroup aria-label="theme" name="color-theme" value={theme} onChange={handleChange}>
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