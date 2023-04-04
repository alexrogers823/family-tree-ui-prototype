import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import Link from '../../../components/common/Link';
// import { makeStyles } from '@material-ui/core/styles';

import { convertToDate } from '../../../utils';

import Button from '../../../components/common/Button';
import EditMemberPageModal from '../../../components/EditMemberPageModal';

import adellaSample from '../../../assets/Adella_sample.jpg';

// import { 
//   getAllFamilyMembers,
//   getFamilyMemberById 
// } from '../redux/actions';

import { Box, styled } from '@mui/material';
import { PAGE_BACKGROUND_COLOR, PAGE_MARGIN, PAGE_PADDING } from '../../../constants';
import { getFamilyMemberById } from '../../../redux/actions';

// const useStyles = makeStyles(theme => ({
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
//   link: {
//     margin: `0 ${theme.spacing(0.5)}px`,
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
// }));

const StyledMemberPage = styled(Box)(({ theme }) => ({
  margin: PAGE_MARGIN,
  padding: PAGE_PADDING,
  backgroundColor: PAGE_BACKGROUND_COLOR,
  border: '2px solid red',
  "& .image": {
    maxWidth: '25%',
    border: '1px solid #ddd',
    padding: 5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  "& .body": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'justify'
  },
  "& .memberName": {
    fontWeight: 600,
    color: 'black',
    textShadow: '2px 2px white'
  },
  "& .memberNameAlt": {
    fontWeight: 300,
    color: 'black',
    fontStyle: 'italic',
    fontSize: 12
  },
  "& .lifeRange": {
    fontStyle: 'italic'
  },
  "& .birthplace": {
    margin: theme.spacing(1),
    textShadow: '1px 1px white'
  },
  "& .residence": {
    margin: theme.spacing(1),
    textShadow: '1px 1px white',
    color: 'green',
  },
  "& .bio": {
    fontStyle: 'italic',
    textAlign: 'justify',
    flex: '1 1 auto',
    margin: 5
  },
  "& .lineage": {
    textAlign: "left"
  }
}));

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

  if (member.suffix) {
    name += ` ${member.suffix}`;
  }

  return name;
}

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
  const { isAuthenticated } = useSelector(state => state.usersReducer);
  const member = useSelector(state => state.membersReducer.member);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/api/members/${topicId}`)
    .then(response => response.json())
    .then(member => {
      dispatch(getFamilyMemberById(member))
    })
  }, []);

  return (
    <StyledMemberPage>
        {member &&
        <>
          <Box className="body">
            <img
              className="image" 
              src={adellaSample} 
              alt={`Photo of ${member.firstName}`}
              // onChange={async (e) => await compressImage(e.target.files[0])} 
            />
            <Box>
              {member.preferredName
                ? <>
                    <Box className="memberName">{member.preferredName} {member.lastName}</Box>
                    <Box className="memberNameAlt">{`Neé ${member.firstName} ${member.middleName || ''} ${member.lastName} ${member.suffix || ''}`}</Box>
                  </>
                : <Box className="memberName">{arrangeName(member)}</Box>
              }
              <Box className="lifeRange">
                b. {convertToDate(member.birthdate)}
                {!member.isAlive && `, d. ${convertToDate(member.deceasedDate)}`}
              </Box>
              <Box component="span" className="birthplace">Birthplace: {member.birthplace}</Box>
              <Box component="span" className="residence">Residence: {member.residence}</Box>
            </Box>
          </Box>

          <Box className="bio">
            {arrangeBiography(member)}
          </Box>
          <hr />
          <Box className="lineage">
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
          </Box>
          {isAuthenticated &&
            <Button onClick={() => setOpenEditMemberModal(true)}>
              Edit Member Info
            </Button>
          }
          <EditMemberPageModal isOpen={openEditMemberModal} closeModal={() => setOpenEditMemberModal(false)} {...member} />
      </>
      }
    </StyledMemberPage>
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