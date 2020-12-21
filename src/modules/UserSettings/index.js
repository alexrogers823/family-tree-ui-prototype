import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MemberInformationSettings from './MemberInformationSettings';
import FamilyRelationsSettings from './FamilyRelationsSettings';
import EventsCreatedSettings from './EventsCreatedSettings';
import AppearanceThemeSettings from './AppearanceThemeSettings';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  console.log('chidren', children);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `user-settings-tab-${index}`,
    'aria-controls': `user-settings-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const UserSettings = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="User Settings Tabs"
        className={classes.tabs}
      >
        <Tab label="Member Information" {...a11yProps(0)} />
        <Tab label="Family Relations" {...a11yProps(1)} />
        <Tab label="Events Created" {...a11yProps(2)} />
        <Tab label="Appearance Theme" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MemberInformationSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FamilyRelationsSettings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EventsCreatedSettings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AppearanceThemeSettings />
      </TabPanel>
    </div>
  );
}

export default UserSettings;