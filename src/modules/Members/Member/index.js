import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import PropTypes from 'prop-types';
import { Container, Paper, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import alexSample from '../../../assets/Alex_sample.jpg';
import adellaSample from '../../../assets/Adella_sample.jpg';

import { concatenateDate, compressImage } from '../../../utils';

import Button from '../../../components/common/Button';
import EditMemberPageModal from '../../../components/EditMemberPageModal';

// import { 
//   getAllFamilyMembers,
//   getFamilyMemberById 
// } from '../redux/actions';

import {
  getAllFamilyMembers,
  getFamilyMemberById
} from '../../../redux/actions';

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
    // maxWidth: '25%',
    // height: 'auto',
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

const arrangeBiography = member => {
  const memberBio = Object.entries(member)
    .filter(key => key[0].startsWith('bio') 
                && key[1])
    .map(key => key[1]);

  if (_.isEmpty(memberBio)) {
    return <h3>No information added yet for {member.preferredName || member.firstName}. Be the first to add it!</h3>
  }

  return (
    memberBio.map(paragraph => {
      return (
        <p>{paragraph}</p>
      )
    })
  );
};


const Member = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  let { topicId } = useParams();

  const members = useSelector(state => state.membersReducer.members);

  // TODO: Remove once getMemberById is in redux 
  const member = useSelector(state => state.membersReducer.member);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFamilyMembers());
    dispatch(getFamilyMemberById(topicId));
  }, []);
  
  const arrangeName = member => {
    if (!member) {
      return {}
    };

    let name = '';
    name += member.firstName;
    if (member.middleName) {
      name += ` ${member.middleName.charAt(0)}.`;
    }
  
    if (member.lastName) {
      name += ` ${member.lastName}`;
    }
  
    if (member.preferredName) {
      name += ` (${member.preferredName})`;
    }
  }

  return (
    <Container>
      <Paper className={classes.root} elevation={3}>
        {member &&
        <Fragment>
          <div className={classes.memberStats}>
            <img 
              src={adellaSample} 
              alt={`Photo of ${member.firstName}`}
              onChange={e => compressImage(e.target.files[0])} 
              className={`${classes.image} ${!member.isAlive && classes.deceased}`}
            />
            <div className={classes.memberStatText}>
              {member.preferredName
                ? <Fragment>
                    <h1 className={classes.memberName}>{member.preferredName} {member.lastName}</h1>
                    <p className={classes.memberNameAlt}>{`Neé ${member.firstName} ${member.middleName} ${member.lastName}`}</p>
                  </Fragment>
                : <h1 className={classes.memberName}>{arrangeName(member)}</h1>
              }
              <h3 className={classes.lifeRange}>
                b. {concatenateDate(member.birthDay, member.birthMonth, member.birthYear)}
                {!member.isAlive && `, d. ${concatenateDate(member.deathDay, member.deathMonth, member.deathYear)}`}
              </h3>
              <h3 className={classes.birthplace}>Birthplace: {member.birthplace}</h3>
              <h3 className={classes.residence}>Residence: {member.residence}</h3>
            </div>
          </div>

          <div className={classes.body}>
            {arrangeBiography(member)}
          </div>
          <hr />
          <div className={classes.lineage}>
            <span>Parents: </span>
            {member.parents 
            ? member.parents.map((parent, i) => {
              return (i > 0) ? <span>&amp;<Link className={classes.link}>{parent}</Link></span> : <Link className={classes.link}>{parent}</Link>
            })
            : <span>Unknown</span>
          }
            {
              member.spouse && 
              <p>Spouse: <Link className={classes.link}>{member.spouse}</Link></p>
            }
            {
              member.offspring && 
              <Fragment>
                <p>Children: </p>
                <ul>
                  {member.offspring.map((child, i) => {
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
          <EditMemberPageModal firstName={member.firstName} isOpen={openModal} closeModal={() => setOpenModal(false)} />
      </Fragment>
      }
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

// const mapStateToProps = state => {
//   return {
//     // members: state.membersReducer.members
//     ...state.membersReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllFamilyMembers: () => dispatch(getAllFamilyMembers())
//   }
// }

export default Member;