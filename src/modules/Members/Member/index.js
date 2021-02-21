import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Paper, Link, Typography } from '@material-ui/core';
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
  memberNameAlt: {
    fontWeight: 300,
    color: 'black',
    fontStyle: 'italic',
    fontSize: 12
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
            {props.preferredName
              ? <Fragment>
                  <h1 className={classes.memberName}>{props.preferredName} {props.lastName}</h1>
                  <p className={classes.memberNameAlt}>{`Neé ${props.firstName} ${props.middleName} ${props.lastName}`}</p>
                </Fragment>
              : <h1 className={classes.memberName}>{name}</h1>
            }
            <h3 className={classes.lifeRange}>
              b. {concatenateDate(props.birthDay, props.birthMonth, props.birthYear)}
              {!props.isAlive && `, d. ${concatenateDate(props.deathDay, props.deathMonth, props.deathYear)}`}
            </h3>
            <h3 className={classes.birthplace}>Birthplace: {props.birthplace}</h3>
            <h3 className={classes.residence}>Residence: {props.residence}</h3>
          </div>
        </div>

        <div className={classes.body}>
          {props.bio
            ? props.bio.map(line => <Typography paragraph>{line}</Typography>)
            : <h3>No information added yet for {props.firstName}. Be the first to add it!</h3>
          }
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