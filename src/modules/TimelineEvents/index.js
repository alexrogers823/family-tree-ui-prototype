import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';

import AddEventModal from '../../components/AddEventModal';
import { Button } from '../../components/common/Button';
import { mapIntToMonth } from '../../utils';

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

  const timelineEvents = useSelector(state => state.timelineEventsReducer.timelineEvents);
  const timelineEvent = useSelector(state => state.timelineEventsReducer.timelineEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getTimelineEventById(2));
  }, []);

  console.log('single event', timelineEvent);

  return (
    <Fragment>
      <div>Timeline event test</div>
      <AddEventModal isOpen={openModal} closeModal={() => setOpenModal(false)} addEvent={props.postNewEvent}/>
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