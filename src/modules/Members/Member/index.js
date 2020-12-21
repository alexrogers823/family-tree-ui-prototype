import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import alexSample from '../../../assets/Alex_sample.jpg';
import adellaSample from '../../../assets/Adella_sample.jpg';

import { concatenateDate } from '../../../utils';

import Button from '../../../components/common/Button';
import EditMemberPageModal from '../../../components/EditMemberPageModal';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
    backgroundColor: 'rgba(47, 115, 169, 0.3)'
  },
  bio: {
    fontStyle: 'italic',
    // textAlign: 'justify',
    // flex: '1 1 auto',
    // margin: 5
  },
  birthplace: {
    display: 'inline',
    margin: theme.spacing(1),
    textShadow: '1px 1px white'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'justify'
    // flexWrap: 'wrap',
  },
  children: {
    listStyleType: 'none',
  },
  deceased: {
    filter: 'grayscale(100%)'
  },
  image: {
    maxWidth: '25%',
    height: 'auto',
    border: '1px solid #ddd',
    padding: 5,
    // boxShadow: '2px 2px black',
    objectFit: 'contain',
    alignSelf: 'center',
  },
  lifeRange: {
    fontStyle: 'italic',
  },
  lineage: {
    // border: '1px solid black',
    textAlign: 'left'
  },
  link: {
    margin: `0 ${theme.spacing(0.5)}px`,
  },
  memberName: {
    fontWeight: 600,
    color: 'black',
    textShadow: '2px 2px white'
  },
  memberStats: {
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    // margin: '2%'
    // flexDirection: 'column'
  },
  memberStatText: {
    // alignSelf: 'baseline'
    // textAlign: 'right'
  },
  residence: {
    display: 'inline',
    margin: theme.spacing(1),
    textShadow: '1px 1px white',
    color: 'green',
  }
}));

const Member = props => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  let name = '';
  name += props.firstName;
  if (props.middleName) {
    name += ` ${props.middleName.charAt(0)}.`;
  }

  if (props.lastName) {
    name += ` ${props.lastName}`;
  }

  if (props.preferredName) {
    name += ` (${props.preferredName})`;
  }

  

  return (
    <Container>
      <Paper className={classes.root} elevation={3}>
        <div className={classes.memberStats}>
          <img src={adellaSample} alt={`Photo of ${props.firstName}`} className={`${classes.image} ${props.death && classes.deceased}`}/>
          <div className={classes.memberStatText}>
            <h1 className={classes.memberName}>{name}</h1>
            <h3 className={classes.lifeRange}>
              b. {concatenateDate(props.birthDay, props.birthMonth, props.birthYear)}
              {!props.isAlive && `, d. ${concatenateDate(props.deathDay, props.deathMonth, props.deathYear)}`}
            </h3>
            <h3 className={classes.birthplace}>Birthplace: {props.birthplace}</h3>
            <h3 className={classes.residence}>Residence: {props.residence}</h3>
          </div>
        </div>

        <div className={classes.body}>
          <p className={classes.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim. Et leo duis ut diam quam nulla porttitor massa id. Sed risus pretium quam vulputate dignissim suspendisse in est. Scelerisque purus semper eget duis at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Purus in mollis nunc sed id semper risus in. Nulla facilisi etiam dignissim diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Elementum curabitur vitae nunc sed velit dignissim sodales. Enim diam vulputate ut pharetra. Odio ut sem nulla pharetra diam sit amet nisl. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
          </p>

          <p className={classes.bio}>
            Risus quis varius quam quisque id diam vel. Risus sed vulputate odio ut enim blandit volutpat maecenas. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim eu turpis egestas pretium aenean pharetra magna. Egestas sed sed risus pretium quam vulputate dignissim. Euismod in pellentesque massa placerat duis ultricies. Penatibus et magnis dis parturient. Semper quis lectus nulla at volutpat. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Donec et odio pellentesque diam volutpat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non pulvinar neque laoreet suspendisse interdum consectetur. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
          </p>

          <p className={classes.bio}>
            Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt id aliquet risus feugiat in ante metus. Mattis pellentesque id nibh tortor id aliquet lectus. Donec ac odio tempor orci dapibus ultrices in iaculis. Donec enim diam vulputate ut pharetra sit amet. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Facilisi nullam vehicula ipsum a arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Enim tortor at auctor urna nunc id cursus metus aliquam. Dui nunc mattis enim ut tellus elementum sagittis. Feugiat nisl pretium fusce id velit.
          </p>
        </div>
        <hr />
        <div className={classes.lineage}>
          <span>Parents: </span>
          {props.parents 
          ? props.parents.map((parent, i) => {
            return (i > 0) ? <span>&amp;<Link className={classes.link}>{parent}</Link></span> : <Link className={classes.link}>{parent}</Link>
          })
          : <span>Unknown</span>
          }
          {
            props.spouse && 
            <p>Spouse: <Link className={classes.link}>{props.spouse}</Link></p>
          }
          {
            props.offspring && 
            <Fragment>
              <p>Children: </p>
              <ul>
                {props.offspring.map((child, i) => {
                  return <Link key={i} className={`${classes.children} ${classes.link}`}>{child}</Link>
                })}
              </ul>
            </Fragment>
          }
        </div>
        <Button
          onClick={() => setOpenModal(true)}
        >
          Edit Member Info
        </Button>
        <EditMemberPageModal firstName={props.firstName} isOpen={openModal} closeModal={() => setOpenModal(false)} />
      </Paper>
    </Container>
    );
};

Member.propTypes = {
  firstName: PropTypes.string.isRequired,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  preferredName: PropTypes.string,
  birthDay: PropTypes.number,
  birthMonth: PropTypes.number,
  birthYear: PropTypes.number,
  deathDay: PropTypes.number,
  deathMonth: PropTypes.number,
  deathYear: PropTypes.number,
  residence: PropTypes.string,
  parents: PropTypes.array,
  offspring: PropTypes.array,
}

export default Member;