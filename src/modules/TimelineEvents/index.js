import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import { Timeline } from '@mui/lab';

import AddEventModal from '../../components/AddTimelineEventModal';
import Button from '../../components/common/Button';
import { convertToDate, convertToDecade } from '../../utils';
import TimelineEvent from './TimelineEvent';

import {
  getAllEvents
} from '../../redux/actions';

// const useStyles = makeStyles(theme => ({
//   title: {
//     fontWeight: 'bold',
//   },
//   topLevel: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: theme.spacing(2)
//   },
//   year: {
//     fontWeight: 'bold',
//     fontSize: 20
//   }
// }));

const TimelineEvents = props => {
  // const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const decades = {};

  const familyTimelineEvents = useSelector(state => state.timelineEventsReducer.timelineEvents);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/timeline/")
      .then(res => res.json())
      .then(timelineEvents => {
        console.log(timelineEvents)
        dispatch(getAllEvents(timelineEvents))
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <Fragment>
      <Timeline>
        {familyTimelineEvents.map((ev, index) => {
          let decade;
          const currentDecade = convertToDecade(ev.eventDate);

          if (!decades.hasOwnProperty(currentDecade)) {
            decade = currentDecade;
            decades[currentDecade] = true;
          }

          return (
          <TimelineEvent date={convertToDate(ev.eventDate)} decade={decade} isMostRecent={(index === familyTimelineEvents.length-1) ? true : false } {...ev} />
        )})}
      </Timeline>
      <Button onClick={() => setOpenModal(true)}>
        Add Event
      </Button>
      <AddEventModal 
        isOpen={openModal} 
        closeModal={() => setOpenModal(false)} 
        addEvent={props.postNewEvent}
      />
    </Fragment>
  )
};

TimelineEvents.propTypes = {
  timelineEvents: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineEvents;