import { Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppearanceThemeSettings from './AppearanceThemeSettings';
import EventsCreatedSettings from './EventsCreatedSettings';
import FamilyRelationsSettings from './FamilyRelationsSettings';
import MemberInformationSettings from './MemberInformationSettings';

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
        <p>{children}</p>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const UserSettings = props => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  return (
    <div>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          {/* <Tab label="Item Four" /> */}
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <AppearanceThemeSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MemberInformationSettings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FamilyRelationsSettings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EventsCreatedSettings />
      </TabPanel>
    </div>
  );
}

export default UserSettings;