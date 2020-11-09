import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  picture: {
    margin: theme.spacing(2)
  }
}));

const Gallery = props => {
  const classes = useStyles();
  return (
    <div>
      <h1>Gallery</h1>
      <hr />
      {
        props.photos && props.photos.map(photo => {
          return (
            <img src="#" alt={`${photo}`} className={classes.picture} />
            )
        })
      }
    </div>
  )
};

export default Gallery;