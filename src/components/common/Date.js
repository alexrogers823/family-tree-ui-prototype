import 'date-fns';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Controller } from 'react-hook-form';

const ChosenDate = props => {
  const [selectedDate, setSelectedDate] = useState(props.date ? dayjs(props.date) : dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('new date', date);
    console.log('month: ', date.month())
  };

  return (
    <Controller 
      name={props.keyLabel}
      control={props.control}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={props.label}
              inputFormat="MM/DD/YYYY"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
              { ...field }
            />
          </LocalizationProvider>
        )
      }}
    />
  )
};

ChosenDate.propTypes = {
  label: PropTypes.string.isRequired
}

export default ChosenDate;