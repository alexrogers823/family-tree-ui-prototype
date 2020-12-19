import React, { Fragment } from 'react';
import Button from '../common/Button';

const appearanceThemeSettings = props => {
  return (
    <Fragment>
      <p>Light Theme</p>
      <p>Dark Theme</p>
      <Button>Save</Button>
    </Fragment>
  )
};

// TODO: Turn paragraphs into radio buttons 

export default appearanceThemeSettings;