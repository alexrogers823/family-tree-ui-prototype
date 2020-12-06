import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import AddEventModal from '../../components/AddEventModal';
import Button from '../../components/common/Button';
import Timeline from './Timeline';


const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  topLevel: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2)
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
      {props.timelineEvents.map(ev => {
        return (
          <Timeline 
          year={ev.year} 
          timelineEvent={ev.timelineEvent} 
          key={`event_${ev.id}`} 
          />
          )
        })}
      <AddEventModal isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </Fragment>
  )
};

TimelineEvents.propTypes = {
  timelineEvents: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineEvents;