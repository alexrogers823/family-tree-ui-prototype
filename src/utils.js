import dayjs from 'dayjs';
import _ from 'lodash';
import Resizer from 'react-image-file-resizer';
import { useSelector } from 'react-redux';

// const familyMembers = useSelector(state => state.membersReducer.members);
//uncomment after fixing redux and state

const concatenateDate = (day = null, month = null, year = null) => {
  let output = '';
  if (month && day) {
    output += `${mapIntToMonth(month)} ${day}, `;
  } else if (month) {
    output += `${mapIntToMonth(month)}, `;
  }
  if (year) {
    output += year
  }

  return output
};

const convertToDate = (dateObj, format="MMMM DD, YYYY") => {
  return dayjs(dateObj).format(format);
}

const searchMember = member => {
  return member.preferredName ? `${member.preferredName} ${member.lastName}` : `${member.firstName} ${member.lastName}`;
}

const mapMemberToId = (familyMembers, memberName) => {
  const [firstName, lastName] = memberName.split(' ');
  const selectedMember = familyMembers.filter(member => (member.preferredName === firstName || member.firstName === firstName) && member.lastName === lastName);

  if (!selectedMember.length) {
    return null;
  }

  return selectedMember[0].id;
}

const mapIntToMonth = month => {
  const months = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "Decemeber"
  }

  return months[`${month}`];
}

const compressImage = image => 
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      image,
      480,
      480,
      "JPEG",
      70,
      0,
      (uri) => resolve(uri),
      "base64"
    );
});

export {
  concatenateDate,
  convertToDate,
  mapIntToMonth,
  compressImage,
  searchMember,
  mapMemberToId
}