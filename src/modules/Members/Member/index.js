import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import PropTypes from 'prop-types';
import Link from '../../../components/common/Link';
import Container from '../../../components/common/Container';
// import { makeStyles } from '@material-ui/core/styles';

import alexSample from '../../../assets/Alex_sample.jpg';
import adellaSample from '../../../assets/Adella_sample.jpg';

import { concatenateDate, convertToDate, compressImage } from '../../../utils';

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

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: 20,
//     backgroundColor: 'rgba(47, 115, 169, 0.3)'
//   },
//   bio: {
//     fontStyle: 'italic',
//     // textAlign: 'justify',
//     // flex: '1 1 auto',
//     // margin: 5
//   },
//   birthplace: {
//     display: 'inline',
//     margin: theme.spacing(1),
//     textShadow: '1px 1px white'
//   },
//   body: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     textAlign: 'justify'
//     // flexWrap: 'wrap',
//   },
//   children: {
//     listStyleType: 'none',
//   },
//   deceased: {
//     filter: 'grayscale(100%)'
//   },
//   image: {
//     maxWidth: '25%',
//     // height: 'auto',
//     border: '1px solid #ddd',
//     padding: 5,
//     // boxShadow: '2px 2px black',
//     objectFit: 'contain',
//     alignSelf: 'center',
//   },
//   lifeRange: {
//     fontStyle: 'italic',
//   },
//   lineage: {
//     // border: '1px solid black',
//     textAlign: 'left'
//   },
//   link: {
//     margin: `0 ${theme.spacing(0.5)}px`,
//   },
//   memberName: {
//     fontWeight: 600,
//     color: 'black',
//     textShadow: '2px 2px white'
//   },
//   memberNameAlt: {
//     fontWeight: 300,
//     color: 'black',
//     fontStyle: 'italic',
//     fontSize: 12
//   },
//   memberStats: {
//     // border: '1px solid black',
//     display: 'flex',
//     justifyContent: 'space-between',
//     // margin: '2%'
//     // flexDirection: 'column'
//   },
//   memberStatText: {
//     // alignSelf: 'baseline'
//     // textAlign: 'right'
//   },
//   residence: {
//     display: 'inline',
//     margin: theme.spacing(1),
//     textShadow: '1px 1px white',
//     color: 'green',
//   }
// }));

const arrangeBiography = member => {
  const memberBio = member.biography ? member.biography.split('\n') : null;

  console.log('bio: ', memberBio);

  if (!memberBio) {
    return <h3>No information added yet for {member.preferredName || member.firstName}. Be the first to add it!</h3>
  }

  return memberBio.map(line => <p>{line}</p>);
};

const displayParents = (member, members, styledLink) => {
  const {primaryParentId, secondaryParentId} = member;

  console.log('first parent', primaryParentId);

  if (primaryParentId && secondaryParentId) {
    return (
      <Fragment>
        <span>Parents: </span>
        <Link href={`./${member.primaryParentId}`}>
          {members.filter(m => m.id === primaryParentId)[0].firstName}
        </Link>
        <span>&amp;
          <Link href={`./${member.secondaryParentId}`}>
            {members.filter(m => m.id === secondaryParentId)[0].firstName}
          </Link>
        </span>
      </Fragment>
    )
  } else if (primaryParentId) {
    return (
      <Fragment>
        <span>Parent: </span>
        <Link href={`./${member.primaryParentId}`}>
          {members.filter(m => m.id === primaryParentId)[0].firstName}
        </Link>
      </Fragment>
    )
  } else {
    return <span>Parents: Unknown</span>
  }

}


const Member = () => {
  // const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  let { topicId } = useParams();

  const members = useSelector(state => state.membersReducer.members);

  // TODO: Remove once getMemberById is in redux 
  const member = useSelector(state => state.membersReducer.member);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/members/')
    .then(response => response.json())
    .then(members => {
      dispatch({type: 'GET_ALL_FAMILY_MEMBERS', members: members});
    })
    
    fetch(`/api/members/${topicId}`)
    .then(response => response.json())
    .then(() => {
      const numericId = Number(topicId)
      dispatch(getFamilyMemberById(numericId))
    })
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

    return name;
  }

  return (
    <Container>
        {member &&
        <>
          <div>
            {/* <img 
              src={adellaSample} 
              alt={`Photo of ${member.firstName}`}
              onChange={async (e) => await compressImage(e.target.files[0])} 
            /> */}
            <div>
              <p>(photo)</p>
              {member.preferredName
                ? <Fragment>
                    <h1>{member.preferredName} {member.lastName}</h1>
                    <p>{`Neé ${member.firstName} ${member.middleName || ''} ${member.lastName}`}</p>
                  </Fragment>
                : <h1>{arrangeName(member)}</h1>
              }
              <h3>
                b. {convertToDate(member.birthdate)}
                {!member.isAlive && `, d. ${convertToDate(member.deceasedDate)}`}
              </h3>
              <h3>Birthplace: {member.birthplace}</h3>
              <h3>Residence: {member.residence}</h3>
            </div>
          </div>

          <div>
            {arrangeBiography(member)}
          </div>
          <hr />
          <div>
            {displayParents(member, members, {})}
            {
              member.spouse && 
              <p>Spouse: <Link>{member.spouse}</Link></p>
            }
            {
              member.offspring && 
              <Fragment>
                <p>Children: </p>
                <ul>
                  {member.offspring.map((child, i) => {
                    return <Link key={i}>{child}</Link>
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
          <EditMemberPageModal isOpen={openModal} closeModal={() => setOpenModal(false)} {...member} />
      </>
      }
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
  birthdate: PropTypes.instanceOf(Date),
  deathDay: PropTypes.number,
  deathMonth: PropTypes.number,
  deathYear: PropTypes.number,
  deceasedDate: PropTypes.instanceOf(Date),
  birthplace: PropTypes.string,
  residence: PropTypes.string,
  biography: PropTypes.string,
  parents: PropTypes.array,
  offspring: PropTypes.array,
  isAlive: PropTypes.bool
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