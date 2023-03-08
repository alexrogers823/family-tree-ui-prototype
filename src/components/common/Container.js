import * as React from 'react';
import { Container as MuiContainer } from '@mui/system';

const Container = props => {
  return (
    <MuiContainer>
      {props.children}
    </MuiContainer>
  )
}

export default Container;