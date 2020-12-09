import 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const ChosenDate = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker 
        disableToolbar
        disableFuture
        variant="inline"
        format="MM/DD/YYYY"
        margin="normal"
        id="date-picker-inline"
        label={props.label || ""}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

ChosenDate.propTypes = {
  label: PropTypes.string.isRequired
}

export default ChosenDate;