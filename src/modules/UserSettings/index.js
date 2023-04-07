import { Box, styled, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PAGE_BACKGROUND_COLOR, PAGE_MARGIN, PAGE_PADDING } from '../../constants';
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

const StyledUserSettingsPage = styled(Box)(({ theme }) => ({
  margin: PAGE_MARGIN,
  padding: PAGE_PADDING,
  backgroundColor: PAGE_BACKGROUND_COLOR
}))

const UserSettings = props => {
  const [value, setValue] = useState(0);

  const user = useSelector(state => state.usersReducer.user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  return (
    <StyledUserSettingsPage>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Appearance Theme" />
          <Tab label="Member Information" />
          <Tab label="Intermediate Family" />
          {/* <Tab label="Item Four" /> */}
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <AppearanceThemeSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MemberInformationSettings { ...user }/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FamilyRelationsSettings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EventsCreatedSettings />
      </TabPanel>
    </StyledUserSettingsPage>
  );
}

export default UserSettings;