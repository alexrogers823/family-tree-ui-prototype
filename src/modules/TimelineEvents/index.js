import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import AddEventModal from '../../components/AddEventModal';
import Button from '../../components/common/Button';
import { Timeline as FamilyTimeline } from './Timeline';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


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

  return (
    <Fragment>
      <div className={classes.topLevel}>
        <h1>Timeline of Family Events</h1>
        <Button onClick={() => setOpenModal(true)}>Add an event</Button>
      </div>
      {/* {props.timelineEvents.map(ev => {
        return (
          <FamilyTimeline 
          year={ev.year} 
          timelineEvent={ev.timelineEvent} 
          key={`event_${ev.id}`} 
          />
          )
        })} */}
      <Timeline align="right">
        {props.timelineEvents.map(ev => {
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
              <TimelineContent>{ev.timelineEvent}</TimelineContent>
            </TimelineItem>
          </Fragment>
          )
        })}
      </Timeline>
      <AddEventModal isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </Fragment>
  )
};

TimelineEvents.propTypes = {
  timelineEvents: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineEvents;