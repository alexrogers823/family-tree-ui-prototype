import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  picture: {
    margin: theme.spacing(2),
  }
}));

const Gallery = props => {
  const classes = useStyles();
  return (
    <div>
      <h1>Gallery</h1>
      <hr />
      <Grid container spacing={2}>
      {
        props.photos && props.photos.map(photo => {
          return (
            <Grid item xs={3}>
              <img src="#" alt={`${photo}`} />
            </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
};

export default Gallery;