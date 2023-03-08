import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import Container from '../../../components/common/Container';
import Link from '../../../components/common/Link';
// import { makeStyles } from '@material-ui/core/styles';

import { convertToDate } from '../../../utils';

import Button from '../../../components/common/Button';
import EditMemberPageModal from '../../../components/EditMemberPageModal';

// import { 
//   getAllFamilyMembers,
//   getFamilyMemberById 
// } from '../redux/actions';

import { getFamilyMemberById } from '../../../redux/actions';

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

  if (!memberBio) {
    return <h3>No information added yet for {member.preferredName || member.firstName}. Be the first to add it!</h3>
  }

  return memberBio.map(line => <p>{line}</p>);
};

const displayParents = (member, styledLink) => {
  if (member.primaryParent && member.secondaryParent) {
    return (
      <>
        <span>Parents: </span>
        {member.primaryParentId &&
          <Link href={`./${member.primaryParentId}`}>
            {member.primaryParent}
          </Link>
        }
        {!member.primaryParentId && <span>{member.primaryParent}</span>}
        <span>&amp;</span>
        {member.secondaryParentId &&
          <Link href={member.secondaryParentId ? `./${member.secondaryParentId}` : "#"}>
            {member.secondaryParent}
          </Link>
        }
        {!member.secondaryParentId && <span>{member.secondaryParent}</span>}
      </>
    )
  } else if (member.primaryParentId) {
    return (
      <>
        <span>Parent: </span>
        {member.primaryParentId &&
          <Link href={`./${member.primaryParentId}`}>
            {member.primaryParent}
          </Link>
        }
        {!member.primaryParentId && <span>{member.primaryParent}</span>}
      </>
    )
  } else {
    return <span>Parents: Unknown</span>
  }

}


const Member = () => {
  // const classes = useStyles();
  const [openEditMemberModal, setOpenEditMemberModal] = useState(false);
  let { topicId } = useParams();

  // TODO: Remove once getMemberById is in redux 
  const member = useSelector(state => state.membersReducer.member);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/api/members/${topicId}`)
    .then(response => response.json())
    .then(member => {
      dispatch(getFamilyMemberById(member))
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

    if (!member.preferredName && member.suffix) {
      name += ` ${member.suffix}`;
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
                ? <>
                    <h1>{member.preferredName} {member.lastName}</h1>
                    <p>{`Neé ${member.firstName} ${member.middleName || ''} ${member.lastName} ${member.suffix || ''}`}</p>
                  </>
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
            {displayParents(member, {})}
            {
              member.spouseName && 
              <p>Spouse: <Link href={`./${member.spouseId}`}>{member.spouse}</Link></p>
            }
            {
              member.offspring && 
              <>
                <p>Children: </p>
                <ul>
                  {member.offspring.map((child, i) => {
                    return <Link key={i}>{child}</Link>
                  })}
                </ul>
              </>
            }
          </div>
          <Button onClick={() => setOpenEditMemberModal(true)}>
            Edit Member Info
          </Button>
          <EditMemberPageModal isOpen={openEditMemberModal} closeModal={() => setOpenEditMemberModal(false)} {...member} />
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
  suffix: PropTypes.string,
  profilePhotoUrl: PropTypes.string,
  birthdate: PropTypes.instanceOf(Date),
  deceasedDate: PropTypes.instanceOf(Date),
  birthplace: PropTypes.string,
  residence: PropTypes.string,
  biography: PropTypes.string,
  primaryParent: PropTypes.string,
  primaryParentId: PropTypes.number,
  secondaryParent: PropTypes.string,
  secondaryParentId: PropTypes.number,
  spouse: PropTypes.string,
  spouseId: PropTypes.number,
  offspring: PropTypes.array,
  isAlive: PropTypes.bool
}

export default Member;