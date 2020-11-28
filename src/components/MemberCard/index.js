import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

import alexSample from '../../assets/Alex_sample.jpg';

// This card will be what is shown on the actual tree page 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MemberCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component="img"
          alt="Member picture"
          height="140"
          image={alexSample}
          title="Sample picture"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.birth} - {props.death}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            Test
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default MemberCard;