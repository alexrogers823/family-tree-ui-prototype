import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  getAllArtifacts,
  getAllEvents
} from '../../redux/actions';

// page specifically for family documents (marriage licenses, deeds, etc) 

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Artifacts = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const artifacts = useSelector(state => state.artifactsReducer.artifacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArtifacts());
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <h1>Artifacts</h1>
      {
        artifacts.map(artifact => {
          return (
            <Card className={classes.root} variant="outlined">
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={artifact.title}
                subheader={artifact.date || "Date Unknown"}
              />
              <CardMedia
                className={classes.media}
                image={artifact.photoUrl}
                title={artifact.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {artifact.shortDescription}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{artifact.longDescription || artifact.shortDescription}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          )
        })
      }
    </Fragment>
  )
};

// const mapStateToProps = state => {
//   return {
//     // artifacts: state.artifactsReducer.artifacts
//     ...state.artifactsReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllArtifacts: () => dispatch(getAllArtifacts())
//   }
// }

export default Artifacts;