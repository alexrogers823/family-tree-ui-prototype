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

export {
  mapIntToMonth,
  concatenateDate,
}