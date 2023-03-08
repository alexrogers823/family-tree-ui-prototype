import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AppearanceThemeSettings = props => {
  // const [value, setValue] = useState('light');
  const dispatch = useDispatch();

  const theme = useSelector(state => state.usersReducer.theme);

  console.log('value', theme);

  return (
    <Fragment>
      <p>AppearanceThemeSettings Test</p>
    </Fragment>
  )
};

// TODO: Turn paragraphs into radio buttons 

export default AppearanceThemeSettings;