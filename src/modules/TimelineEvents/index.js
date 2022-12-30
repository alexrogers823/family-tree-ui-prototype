import React, { Fragment, useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { Timeline } from '@mui/lab';

import AddEventModal from '../../components/AddTimelineEventModal';
import Button from '../../components/common/Button';
import { mapIntToMonth } from '../../utils';
import TimelineEvent from './TimelineEvent';
import TimelineEventReducer from './redux/reducer';

import { 
  getAllEvents, 
  getTimelineEventById,
  createTimelineEvent 
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

  const familyTimelineEvents = useSelector(state => state.timelineEventsReducer.timelineEvents)
                                .sort((a, b) => a.year + b.year); // change so that this happens on backend

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/timeline/")
      .then(res => res.json())
      .then(timelineEvents => {
        console.log(timelineEvents)
        dispatch({type: "GET_ALL_EVENTS", timelineEvents: timelineEvents})
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  console.log(familyTimelineEvents)

  return (
    <Fragment>
      <div>Timeline event test</div>
      <div>Timeline event test</div>
      <div>Timeline event test</div>
      <div>Timeline event test</div>
      <div>Timeline event test</div>
      <div>Timeline event test</div>
      <Timeline>
        {familyTimelineEvents.map(ev => {
          return (
          <TimelineEvent date={ev.year} event={ev.event} id={ev.id} />
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

// const mapStateToProps = state => {
//   return {
//     // timelineEvents: state.timelineEventsReducer.timelineEvents
//     ...state.timelineEventsReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllEvents: () => dispatch(getAllEvents()),
//   }
// }

export default TimelineEvents;