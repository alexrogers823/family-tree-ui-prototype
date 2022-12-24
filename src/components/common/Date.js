import 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const ChosenDate = props => {
  const [selectedDate, setSelectedDate] = useState(props.date ? dayjs(props.date) : dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('new date', date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
          label={props.label}
          inputFormat="MM/DD/YYYY"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
};

ChosenDate.propTypes = {
  label: PropTypes.string.isRequired
}

export default ChosenDate;