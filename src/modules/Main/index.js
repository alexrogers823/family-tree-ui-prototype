import React from 'react';
import { Link, Paper } from '@material-ui/core';

const Main = () => {
  return (
    <Paper elevation={3}>
      <p>Welcome to the family website!</p>

      <p>
        Explore our roots by seeing the new  
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          family tree
        </Link>
        , checking out  
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          pictures
        </Link>
        , or finding out more about a specific person.
      </p>

      <p>
        You can also contribute to our family  
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          timeline
        </Link>
        .
      </p>

      <p>
        If you're having issues or need help, 
        <Link 
          href="#" 
          onClick={(e) => e.preventDefault()}
        >
          contact the adminstrator
        </Link>
        .
      </p>

      <p>Enjoy our history!</p>
    </Paper>
  );
};

export default Main;