import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@material-ui/lab';

import AddEventModal from '../../components/AddEventModal';
import Button from '../../components/common/Button';
import { mapIntToMonth } from '../../utils';

import { getAllEvents, postNewEvent } from './redux/actions';


const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  topLevel: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2)
  },
  year: {
    fontWeight: 'bold',
    fontSize: 20
  }
}));

const TimelineEvents = props => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const timelineEvents = useSelector(state => state.timelineEventsReducer.timelineEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (
    <Fragment>
      <div className={classes.topLevel}>
        <h1>Timeline of Family Events</h1>
        <Button onClick={() => setOpenModal(true)}>Add an event</Button>
      </div>

      <Timeline align="right">
        {timelineEvents.map(ev => {
          return (
            <Fragment>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.year}>{ev.year}</TimelineContent>
              </TimelineItem>
              <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{`${ev.month ? mapIntToMonth(ev.month) : ''}${ev.day ? (' ' + ev.day) : ''}: ${ev.timelineEvent}`}</TimelineContent>
            </TimelineItem>
          </Fragment>
          )
        })}
      </Timeline>
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