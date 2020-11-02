import React from 'react';
import PropTypes from 'prop-types';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  memberName: {
    fontWeight: 600,
    color: 'blue',
  },
  lifeRange: {
    fontStyle: 'italic',
  },
  birthplace: {
    textDecoration: 'underline',
  },
  residence: {
    textDecoration: 'underline',
    color: 'green',
  },
  bio: {
    fontStyle: 'italic',
  },
  lineage: {
    border: '1px solid black'
  }
}));

const Member = props => {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={3}>
        <h1 className={classes.memberName}>{props.name}</h1>
        <h3 className={classes.lifeRange}>b. {props.birth}{props.death && `, d. ${props.death}`}</h3>
        <h3 className={classes.birthplace}>Place of Birth: {props.birthplace}</h3>
        <h3 className={classes.residence}>Place of Residence: {props.residence}</h3>
        <p className={classes.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim. Et leo duis ut diam quam nulla porttitor massa id. Sed risus pretium quam vulputate dignissim suspendisse in est. Scelerisque purus semper eget duis at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Purus in mollis nunc sed id semper risus in. Nulla facilisi etiam dignissim diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Elementum curabitur vitae nunc sed velit dignissim sodales. Enim diam vulputate ut pharetra. Odio ut sem nulla pharetra diam sit amet nisl. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
        </p>

        <p className={classes.bio}>
          Risus quis varius quam quisque id diam vel. Risus sed vulputate odio ut enim blandit volutpat maecenas. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim eu turpis egestas pretium aenean pharetra magna. Egestas sed sed risus pretium quam vulputate dignissim. Euismod in pellentesque massa placerat duis ultricies. Penatibus et magnis dis parturient. Semper quis lectus nulla at volutpat. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Donec et odio pellentesque diam volutpat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non pulvinar neque laoreet suspendisse interdum consectetur. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
        </p>

        <p className={classes.bio}>
          Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt id aliquet risus feugiat in ante metus. Mattis pellentesque id nibh tortor id aliquet lectus. Donec ac odio tempor orci dapibus ultrices in iaculis. Donec enim diam vulputate ut pharetra sit amet. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Facilisi nullam vehicula ipsum a arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim tortor at auctor urna nunc id cursus metus aliquam. Dui nunc mattis enim ut tellus elementum sagittis. Feugiat nisl pretium fusce id velit.
        </p>

        <div className={classes.lineage}>
          <p>Parents: {props.parents[0]} &amp; {props.parents[1]}</p>
          {
            props.spouse && 
            <p>Spouse: {props.spouse}</p>
          }
          <p>Children: </p>
          {
            props.offspring && 
            <ul>
            {props.offspring.map((child, i) => {
              return <li key={i}>{child}</li>
              })}
            </ul>
          }
        </div>
      </Paper>
    </Container>
    );
};

Member.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.string,
  death: PropTypes.string,
  residence: PropTypes.string,
  parents: PropTypes.array,
  offspring: PropTypes.array,
}

export default Member;