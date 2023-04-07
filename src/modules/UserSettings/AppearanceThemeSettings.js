import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAppearance } from './redux/actions';

const AppearanceThemeSettings = props => {
  // const [value, setValue] = useState('light');
  const dispatch = useDispatch();

  const theme = useSelector(state => state.usersReducer.theme);

  const handleToggle = () => {
    if (theme === "light") {
      dispatch(changeAppearance("dark"))
    } else {
      dispatch(changeAppearance("light"))
    }
  };

  console.log('value', theme);

  return (
    <FormControlLabel control={<Switch defaultChecked={theme === "dark" ? true : false} onChange={handleToggle} />} label="Dark Mode" />
  )
};

// TODO: Turn paragraphs into radio buttons 

export default AppearanceThemeSettings;