import React from 'react';
import { Paper } from '@material-ui/core';

const Main = () => {
  return (
    <Paper elevation={3}>
      <p>Welcome to the family website!</p>

      <p>Explore our roots by seeing the new family tree,
          checking out pictures, or finding out more about
          a specific person.
      </p>

      <p>You can also contribute to our family timeline.</p>

      <p>If you're having issues or need help, contact 
          the adminstrator.
      </p>

      <p>Enjoy our history!</p>
    </Paper>
  );
};

export default Main;